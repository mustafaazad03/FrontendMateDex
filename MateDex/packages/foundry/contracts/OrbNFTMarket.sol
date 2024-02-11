// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract OrbNFTMarket is ERC721URIStorage {
    uint256 public tokenCount;
    //    -> tokenID -> granted address
    mapping(uint256 => mapping(address => bool)) public rightToSeeNFT;
    mapping(uint256 => uint256) public tokenIdToOrbId;
    mapping(address => uint256[]) public userListedNFTs;

    struct ListedNFT {
        uint256 tokenId;
        uint256 orbId;
        uint256 viewPrice;
        uint256 sellingPrice;
    }

    ListedNFT[] public listedNFTs;

    constructor() ERC721("PENDULUM", "Pendulum Orb NFT Market") {}

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            rightToSeeNFT[tokenId][msg.sender],
            "you cannot access this nft"
        );
        return super.tokenURI(tokenId);
    }

    function listNFT(
        uint256 _tokenId,
        uint256 _viewPrice,
        uint256 _sellingPrice
    ) external {
        require(ownerOf(_tokenId) == msg.sender, "this is not your nft");
        ListedNFT memory _nft = ListedNFT(
            _tokenId,
            tokenIdToOrbId[_tokenId],
            _viewPrice,
            _sellingPrice
        );
        listedNFTs.push(_nft);
        userListedNFTs[msg.sender].push(listedNFTs.length - 1);
    }

    // function getAllListedNFTs() external view returns(ListedNFT[] memory)
}
