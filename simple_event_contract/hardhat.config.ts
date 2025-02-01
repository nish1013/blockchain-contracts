require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL, // Uses Alchemy
      accounts: [process.env.PRIVATE_KEY], // Uses your MetaMask key
    },
  },
};
