// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Dontbuy {
  address public owner;
  string public name;
  string public title;
  uint256 public buydate;

  constructor() public {
    owner = address(0x0);
    name = "";
    title = "Bamboozle Victim";
    buydate = block.timestamp;
  }
  
    function modifyToken(address publickey, string memory newname) public {
        owner = publickey;
        name = newname;
        buydate = block.timestamp;
    }
}
