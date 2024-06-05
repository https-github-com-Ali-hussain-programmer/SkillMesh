const SkillmeshContract = artifacts.require("DecentralizedPlatform");

module.exports = function (deployer) {
  deployer.deploy(SkillmeshContract);
};
