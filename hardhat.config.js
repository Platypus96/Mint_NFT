/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL, // Set this to your Sepolia Infura/Alchemy endpoint or other RPC URL
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

