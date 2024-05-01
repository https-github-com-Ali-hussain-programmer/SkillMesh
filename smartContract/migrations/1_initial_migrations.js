const MyContract = artifacts.require("DecentralizedPlatform");

module.exports = function(deployer) {
  deployer.deploy(MyContract);
};
