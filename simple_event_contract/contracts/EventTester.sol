// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EventTester {
    event SimpleEvent(address indexed sender, uint256 value);

    function triggerEvent(uint256 _value) public {
        emit SimpleEvent(msg.sender, _value);
    }
}
