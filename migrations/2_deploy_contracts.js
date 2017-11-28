var ConvertLib = artifacts.require("./ConvertLib.sol");
// var MealToken = artifacts.require("./MealToken.sol");
var MealToken = artifacts.require("MealToken");

module.exports = function(deployer) {
  deployer.deploy(MealToken);
};

// module.exports = function(deployer) {
//   deployer.deploy(ConvertLib);
//   deployer.link(ConvertLib, MealToken);
//   deployer.deploy(MealToken);
// };
