var ConvertLib = artifacts.require("./ConvertLib.sol");
var MealToken = artifacts.require("./MealToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MealToken);
  deployer.deploy(MealToken);
};
