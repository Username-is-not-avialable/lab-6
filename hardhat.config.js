/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
};

require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
 solidity: "0.8.19",
 paths: {
 artifacts: "./app/src/artifacts",
 },
};

require("@nomicfoundation/hardhat-ignition-ethers");