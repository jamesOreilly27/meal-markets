pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/MealToken.sol";


contract TestMealToken {

    function testInitialBalanceUsingDeployedContract() public {
        MealToken meta = MealToken(DeployedAddresses.MealToken());

        uint expected = 10000;

        Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 MealToken initially");
    }

    function testInitialBalanceWithNewMealToken() public {
        MealToken meta = new MealToken();

        uint expected = 10000;

        Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 MealToken initially");
    }

}
