var ConvertLib = artifacts.require("./ConvertLib.sol")
// var MealToken = artifacts.require("./MealToken.sol")
var MealToken = artifacts.require("MealToken")

module.exports = function(deployer) {
  deployer.deploy(MealToken)
}
