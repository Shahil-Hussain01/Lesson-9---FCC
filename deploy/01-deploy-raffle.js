const { network } = require("hardhat");

module.exports = async function ({ getNamedAccount, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccount();

  const raffle = await deploy("RAffle", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });
};
