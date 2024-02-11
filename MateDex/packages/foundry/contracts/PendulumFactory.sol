// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
// import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {PendulumOrb} from "./PendulumOrb.sol";

contract PendulumFactory {
    struct ExpertProfile {
        string detailsCID;
        uint256 expertRating;
        // uint256[] orbIds;
        address[] orbsOwned;
    }

    mapping(address => bool) public isExpert;
    mapping(address => ExpertProfile) public experts;
    address public chainlinkDataFeed;
    mapping(address => address[]) public orbsOwnedByUser;
    address[] public orbs;
    mapping(address => bool) public isOrb;

    constructor(address _dataFeed) {
        chainlinkDataFeed = _dataFeed;
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
        address[] memory _emptyOrbId;
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

    // function createOrb
    function createOrb(
        // uint256 _auctionTime,
        uint256 _startingPriceInUSD,
        uint256 _coolDownTime,
        uint256 _taxRate
    ) external onlyExpert {
        PendulumOrb _newOrb = new PendulumOrb(address(this), chainlinkDataFeed);
        _newOrb._init_(
            // _auctionTime,
            _startingPriceInUSD,
            _coolDownTime,
            _taxRate,
            msg.sender
        );
        isOrb[address(_newOrb)] = true;
        orbs.push(address(_newOrb));
        experts[msg.sender].orbsOwned.push(address(_newOrb));
    }

    function updateOrbsOwned(address _orb, address _owner) external {
        require(isOrb[msg.sender], "only orb can access this function");
        orbsOwnedByUser[_owner].push(_orb);
    }

    function getExpertProfile(
        address _expert
    ) external view returns (ExpertProfile memory) {
        return experts[_expert];
    }

    function getAliveUpcomingOrbs() external view returns (address[] memory) {
        uint256 length;
        for (uint256 i = 0; i < orbs.length; i++) {
            PendulumOrb _orb = PendulumOrb(orbs[i]);
            // && _orb.auctionTime() > block.timestamp
            if (_orb.isAlive()) {
                length++;
            }
        }
        address[] memory upcomingOrbs = new address[](length);
        uint256 count;
        for (uint256 i = 0; i < orbs.length; i++) {
            PendulumOrb _orb = PendulumOrb(orbs[i]);
            // && _orb.auctionTime() > block.timestamp
            if (_orb.isAlive()) {
                upcomingOrbs[count] = orbs[i];
                count++;
            }
        }
        return upcomingOrbs;
    }

    function getExpertOwnedOrbs() external view returns (address[] memory) {
        return experts[msg.sender].orbsOwned;
    }

    function getUserOwnedOrbs() external view returns (address[] memory) {
        return orbsOwnedByUser[msg.sender];
    }
}
