// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import {AggregatorV3Interface} from "./interface/AggregatorV3Interface.sol";
import {PendulumFactory} from "./PendulumFactory.sol";

contract PendulumOrb {
    // 30 days
    uint32 immutable taxPaymentCycleTime = 2592000;
    // if no question has been asked and no reselling occured but the user have to pay tax unnecessarily
    // 60 days
    uint32 immutable resellingEndExp = 5184000;
    address public createBy;
    address public owner;
    // uint256 public auctionTime;
    uint256 public priceInUSD;
    uint256 public coolDownTime;
    uint256 public resellingPrice;
    // public if owner put the orb for reselling but on one is buying till a certain point of time
    // public and owner have to pay tax unnecessarily
    string[] public questionAnswer;
    uint256 public taxRate;
    uint256 public orbRating;
    uint32 public lastQuestionTime;
    uint32 public createdAt;
    bool public isAlive = true;
    uint32[12] public taxPaymentTime;
    uint8 public noOfTimesTaxPaid;
    uint256 public questionCount;
    uint256 public answerCount;

    address public factoryContract;
    AggregatorV3Interface internal dataFeed;
    uint256 public amountPaidForOrb;

    struct OrbDetails {
        address createBy;
        // uint256 auctionTime;
        uint256 priceInUSD;
        uint256 coolDownTime;
        uint32 createdAt;
        uint256 taxRate;
        uint32[12] taxPaymentTime;
        uint256 resellingPrice;
        string[] questionAnswer;
        uint256 orbRating;
        uint32 lastQuestionTime;
        bool isAlive;
        uint8 noOfTimesTaxPaid;
        uint256 questionCount;
        uint256 answerCount;
        uint256 amountPaidForOrb;
        address owner;
    }

    constructor(address _factoryContract, address _datafeed) {
        factoryContract = _factoryContract;
        dataFeed = AggregatorV3Interface(_datafeed);
    }

    function _init_(
        // uint256 _auctionTime,
        uint256 _startingPriceInUSD,
        uint256 _coolDownTime,
        uint256 _taxRate,
        address _createdBy
    ) external {
        require(msg.sender == factoryContract, "invalid access");
        createBy = _createdBy;
        owner = address(0);
        // auctionTime = _auctionTime;
        priceInUSD = _startingPriceInUSD;
        coolDownTime = _coolDownTime;
        taxRate = _taxRate;
        lastQuestionTime = uint32(block.timestamp);
        createdAt = uint32(block.timestamp);
        // uint256 diff = _auctionTime - block.timestamp;
        for (uint32 i = 1; i < 13; i++) {
            taxPaymentTime[i - 1] =
                (i * taxPaymentCycleTime) +
                uint32(block.timestamp);
            // uint32(diff);
        }
    }

    function updateOrb(
        // uint256 _auctionTime,
        uint256 _priceInUSD,
        uint256 _coolDownTime,
        uint256 _taxRate
    ) external {
        require(msg.sender == createBy, "you cannot access this function");
        // auctionTime = _auctionTime;
        priceInUSD = _priceInUSD;
        coolDownTime = _coolDownTime;
        taxRate = _taxRate;
    }

    function buyOrb(uint256 _resellingPrice) external payable {
        require(isAlive, "orb is dead");
        // require(
        //     block.timestamp > auctionTime,
        //     "you cannot buy orb before auction time"
        // );

        // chainlink data feed for price of token is used here
        uint256 totalAmountPaid = getAmountPaid();
        require(totalAmountPaid >= priceInUSD, "invalid price amount provided");
        require(_resellingPrice > 0, "invalid reselling price");

        owner = msg.sender;

        // orbsOwned[msg.sender].push(_orbId);
        PendulumFactory(factoryContract).updateOrbsOwned(
            address(this),
            msg.sender
        );
        amountPaidForOrb = msg.value;
    }

    function askQuestion(string memory _questionCID) external {
        if (block.timestamp > taxPaymentTime[noOfTimesTaxPaid]) {
            isAlive = false;
            revert("you failed to pay the tax fee on time");
        } else
            require(msg.sender == owner, "you are not the owner of this orb");
        require(
            block.timestamp > coolDownTime + lastQuestionTime,
            "orb is not cooled down yet"
        );

        questionAnswer.push(_questionCID);
        questionCount++;
    }

    function answerQuestion(
        string memory _questionAndAnswerCID,
        uint256 _questionId
    ) external {
        require(msg.sender == createBy, "only owner can access this");
        require(createBy == msg.sender, "invalid expert");
        questionAnswer[_questionId] = _questionAndAnswerCID;
        answerCount++;
        lastQuestionTime = uint32(block.timestamp);
    }

    function getAmountPaid() internal returns (uint256) {
        (, int256 _tokenPriceInUSD, , , ) = dataFeed.latestRoundData();
        uint8 _decimals = dataFeed.decimals();
        return
            (msg.value * uint256(_tokenPriceInUSD)) / (10 ** (_decimals + 18));
    }

    function payTax() external payable {
        require(owner == msg.sender, "you are not the owner of this orb");
        require(noOfTimesTaxPaid <= 11, "org completed");
        uint256 taxAmount = (resellingPrice * taxRate) / 100;
        uint256 amountPaid = getAmountPaid();
        require(amountPaid >= taxAmount, "invalid amount paid for tax");
        noOfTimesTaxPaid++;
    }

    function rateOrb(uint8 _rating) external {
        require(_rating <= 5, "invalid rating number");
        require(owner == msg.sender, "You are not the owner of this orb");
        uint256 overallRating = (orbRating + _rating) / 2;
        orbRating = overallRating;
    }

    function getRefund() external {
        require(msg.sender == owner, "you are not the owner of this orb");
        // it's time to put new question but the no of question asked is not equal to no of answers provided
        if (
            block.timestamp > lastQuestionTime + coolDownTime &&
            questionCount != answerCount
        ) {
            // give condition to mint the nft
            isAlive = false;
            (bool success, ) = msg.sender.call{value: amountPaidForOrb}("");
            require(success, "not refunded");
        } else {
            revert("conditions does not met for refunding");
        }
    }

    function getOrbDetails() external view returns (OrbDetails memory) {
        OrbDetails memory _orbDetails = OrbDetails(
            createBy,
            // auctionTime,
            priceInUSD,
            coolDownTime,
            createdAt,
            taxRate,
            taxPaymentTime,
            resellingPrice,
            questionAnswer,
            orbRating,
            lastQuestionTime,
            isAlive,
            noOfTimesTaxPaid,
            questionCount,
            answerCount,
            amountPaidForOrb,
            owner
        );
        return _orbDetails;
    }
}
