const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");

module.exports = async function ({ getNamedAccount, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccount();
  //   const chainId = network.config.chainId;
  const chainId = network.name.chainId;

  if (developmentChains.includes(network.name)) {
    log("Local network detected!! deploying mocks...");
  }
};
