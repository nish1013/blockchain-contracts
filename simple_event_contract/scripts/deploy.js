const hre = require('hardhat');

// commnad -> npx hardhat run scripts/deploy.js --network sepolia
async function main() {
  const EventTester = await hre.ethers.getContractFactory('EventTester');
  const contract = await EventTester.deploy();

  console.log('Waiting for contract deployment...');
  await contract.waitForDeployment();
  console.log('Contract deployed to:', contract.target); // e.g 0x566D7Dc4B882cFD01e03463fFDd963Dfc35237d5
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
