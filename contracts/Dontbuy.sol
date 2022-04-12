// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
//import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";

contract Dontbuy is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

  constructor() ERC721("DontBuyThisNFT", "DBT") {
    MintNFT(address(0x814bB9f41045C7fb273Fef84bDDb3059D9f8bB28), "./NFT/NFT.json");
  }



  function MintNFT(address owner, string memory tokenURI)
      public
      returns (uint256)
  {
      _tokenIds.increment();

      uint256 newItemId = _tokenIds.current();
      _mint(owner, newItemId);
      _setTokenURI(newItemId, tokenURI);

      return newItemId;
  }

}
