// SPDX-License-Identifier: UNLICENSED
pragma solidity  ^0.8.9;

//  IMPORT THE HARDHAT CONSOLE
import "hardhat/console.sol";

contract MyTest {

    uint256 public unlockedTime;
    address payable public owner;

    event Widthrawal(uint256 amount, uint256 when);

    constructor(uint256 _unlockedTime) payable {
        require(block.timestamp < _unlockedTime, "Unlocked time should be in future");

        unlockedTime = _unlockedTime;
        owner = payable(msg.sender);
    }

    function withdraw() public {
        require(block.timestamp >= unlockedTime, "Wait till the time period complet");
        require(msg.sender == owner, "Your are not an owner");

        emit Widthrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }

}