// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {AggregatorV3Interface} from "./interface/AggregatorV3Interface.sol";
import {OrbNFTMarket} from "./OrbNFTMarket.sol";

// getting stack full error in this contract

contract Pendulum is OrbNFTMarket {
    // 30 days
    uint32 immutable taxPaymentCycleTime = 2592000;
    // if no question has been asked and no reselling occured but the user have to pay tax unnecessarily
    // 60 days
    uint32 immutable resellingEndExp = 5184000;

    struct Orb {
        address createBy;
        address owner;
        uint256 auctionTime;
        uint256 priceInUSD;
        uint256 coolDownTime;
        uint256 resellingPrice;
        // if owner put the orb for reselling but on one is buying till a certain point of time
        // and owner have to pay tax unnecessarily
        string[] questionAnswer;
        uint256 taxRate;
        uint256 orbRating;
        uint32 lastQuestionTime;
        uint32 createdAt;
        bool isAlive;
        uint32[11] taxPaymentTime;
        uint8 noOfTimesTaxPaid;
    }
    struct ExpertProfile {
        string detailsCID;
        uint256 expertRating;
        uint256[] orbIds;
    }

    AggregatorV3Interface internal dataFeed;
    mapping(address => ExpertProfile) public experts;
    mapping(address => bool) public isExpert;
    mapping(address => uint256[]) public orbsOwned;

    Orb[] public orbs;

    constructor(address _chainlinkDataFeedAddress) {
        dataFeed = AggregatorV3Interface(_chainlinkDataFeedAddress);
    }

    modifier onlyExpert() {
        require(isExpert[msg.sender], "sender does not have expert profile");
        _;
    }
    modifier notExpert() {
        require(!isExpert[msg.sender], "sender have expert profile");
        _;
    }

    function createProfile(
        string memory _profileDetailsCID
    ) external notExpert {
        uint256[] memory _emptyOrbId;
        ExpertProfile memory _expertProfile = ExpertProfile(
            _profileDetailsCID,
            0,
            _emptyOrbId
        );
        experts[msg.sender] = _expertProfile;
        isExpert[msg.sender] = true;
    }

    function updateProfile(
        string memory _profileDetailsCID
    ) external onlyExpert {
        experts[msg.sender].detailsCID = _profileDetailsCID;
    }

    // only expert can create an orb
    function createOrb(
        uint256 _auctionTime,
        uint256 _startingPriceInUSD,
        uint256 _coolDownTime,
        uint256 _taxRate
    ) external onlyExpert {
        string[] memory _emptyQuestionArray;
        uint32[11] memory _taxPaid;

        for (uint32 i = 1; i < 11; i++) {
            _taxPaid[i] = (i * taxPaymentCycleTime) + uint32(block.timestamp);
        }
        Orb memory _orb = Orb(
            msg.sender,
            address(0),
            _auctionTime,
            _startingPriceInUSD,
            _coolDownTime,
            // reselling price
            0,
            _emptyQuestionArray,
            _taxRate,
            // orb rating
            0,
            // last question asked time
            uint32(block.timestamp),
            // created at what time
            uint32(block.timestamp),
            // is orb still tradeable
            true,
            _taxPaid,
            0
        );
        orbs.push(_orb);
        experts[msg.sender].orbIds.push(orbs.length - 1);
    }

    function buyOrb(
        uint256 _orbId,
        uint256 _resellingPrice
    ) external payable notExpert {
        Orb memory _orb = orbs[_orbId];
        require(_orb.isAlive, "orb is dead");
        require(
            block.timestamp > _orb.auctionTime,
            "you cannot buy orb before auction time"
        );

        // chainlink data feed for price of token is used here
        uint256 totalAmountPaid = getAmountPaid();
        require(
            totalAmountPaid >= _orb.priceInUSD,
            "invalid price amount provided"
        );
        require(_resellingPrice > 0, "invalid reselling price");

        _orb.owner = msg.sender;
        orbs[_orbId] = _orb;
        orbsOwned[msg.sender].push(_orbId);
    }

    function askQuestion(
        string memory _questionCID,
        uint256 _orbId
    ) external notExpert {
        Orb memory _orb = orbs[_orbId];

        if (block.timestamp > _orb.taxPaymentTime[_orb.noOfTimesTaxPaid]) {
            orbs[_orbId].isAlive = false;
            revert("you failed to pay the tax fee on time");
        } else
            require(
                msg.sender == _orb.owner,
                "you are not the owner of this orb"
            );
        require(
            block.timestamp > _orb.coolDownTime + _orb.lastQuestionTime,
            "orb is not cooled down yet"
        );
        orbs[_orbId].questionAnswer.push(_questionCID);
    }

    function answerQuestion(
        string memory _questionAndAnswerCID,
        uint256 _orbId,
        uint256 _questionId
    ) external onlyExpert {
        Orb memory _orb = orbs[_orbId];
        require(_orb.createBy == msg.sender, "invalid expert");
        _orb.questionAnswer[_questionId] = _questionAndAnswerCID;
        _orb.lastQuestionTime = uint32(block.timestamp);
        orbs[_orbId] = _orb;
    }

    function payTax(uint256 _orbId) external payable notExpert {
        Orb memory _orb = orbs[_orbId];
        require(_orb.owner == msg.sender, "you are not the owner of this orb");
        require(_orb.noOfTimesTaxPaid <= 11, "org completed");
        uint256 taxAmount = (_orb.resellingPrice * _orb.taxRate) / 100;
        uint256 amountPaid = getAmountPaid();
        require(amountPaid >= taxAmount, "invalid amount paid for tax");
        orbs[_orbId].noOfTimesTaxPaid++;
    }

    function rateOrb(uint256 _orbId, uint8 _rating) external notExpert {
        Orb memory _orb = orbs[_orbId];
        require(_rating <= 5, "invalid rating number");
        require(_orb.owner == msg.sender, "You are not the owner of this orb");
        uint256 overallRating = (_orb.orbRating + _rating) / 2;
        orbs[_orbId].orbRating = overallRating;
    }

    function mintNFTForOrb(
        uint256 _orbId,
        string memory _tokenURI
    ) external notExpert {
        Orb memory _orb = orbs[_orbId];
        require(_orb.owner == msg.sender, "invalid user accessing orb");
        if (
            _orb.noOfTimesTaxPaid == 11 ||
            block.timestamp > _orb.lastQuestionTime + resellingEndExp
        ) {
            // the only mint the nft
            _safeMint(msg.sender, tokenCount);
            _setTokenURI(tokenCount, _tokenURI);
            tokenIdToOrbId[tokenCount] = _orbId;
            tokenCount++;
        } else {
            revert("you cannot mint before orb completion");
        }
    }

    function getAmountPaid() internal returns (uint256) {
        (, int256 _tokenPriceInUSD, , , ) = dataFeed.latestRoundData();
        uint8 _decimals = dataFeed.decimals();
        return
            (msg.value * uint256(_tokenPriceInUSD)) / (10 ** (_decimals + 18));
    }

    function getAllOrbs() external view returns (Orb[] memory) {
        return orbs;
    }

    function getExpertProfile(
        address _expert
    ) external view returns (ExpertProfile memory) {
        return experts[_expert];
    }

    function getExpertOrbs(
        address _expert
    ) external view returns (Orb[] memory) {
        ExpertProfile memory expert = experts[_expert];
        uint256 length = expert.orbIds.length;
        Orb[] memory _expertOrbs = new Orb[](length);

        for (uint256 i = 0; i < length; i++) {
            Orb memory _orb = orbs[expert.orbIds[i]];
            // _expertOrbs.push(_orb);
            _expertOrbs[i] = _orb;
        }
        return _expertOrbs;
    }

    function getUserOrbs(address _user) external view returns (Orb[] memory) {
        uint256[] memory ids = orbsOwned[_user];
        Orb[] memory _userOrbs = new Orb[](ids.length);
        for (uint256 i = 0; i < ids.length; i++) {
            Orb memory _orb = orbs[ids[i]];
            _userOrbs[i] = _orb;
        }
        return _userOrbs;
    }
}
