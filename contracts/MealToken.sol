// pragma solidity ^0.4.18;

// import "./ConvertLib.sol";

// // This is just a simple example of a coin-like contract.
// // It is not standards compatible and cannot be expected to talk to other
// // coin/token contracts. If you want to create a standards-compliant
// // token, see: https://github.com/ConsenSys/Tokens. Cheers!

// contract MealToken {
//     mapping (address => uint) balances;

//     event Transfer(address indexed _from, address indexed _to, uint256 _value);

//     function MealToken() public {
//         balances[tx.origin] = 10000;
//     }

//     function sendCoin(address receiver, uint amount) public returns(bool sufficient) {
//         if (balances[msg.sender] < amount) return false;
//         balances[msg.sender] -= amount;
//         balances[receiver] += amount;
//         Transfer(msg.sender, receiver, amount);
//         return true;
//     }

//     function getBalanceInEth(address addr) public view returns(uint) {
//         return ConvertLib.convert(getBalance(addr), 2);
//     }

//     function getBalance(address addr) public view returns(uint) {
//         return balances[addr];
//     }
// }

pragma solidity ^0.4.4;

import 'zeppelin-solidity/contracts/token/StandardToken.sol';


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