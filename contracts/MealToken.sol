pragma solidity ^0.4.4;

import "./token/StandardToken.sol";


contract MealToken is StandardToken {
    string public name = 'MealToken';
    string public symbol = 'MEAL';
    uint public decimals = 0;
    uint public INITIAL_SUPPLY = 12000;

    function MealToken() {
        totalSupply = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}