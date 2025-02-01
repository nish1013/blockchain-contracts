const hre = require('hardhat');

async function main() {
  const contractAddress = '0x566D7Dc4B882cFD01e03463fFDd963Dfc35237d5'; // Your deployed contract address
  const contract = await hre.ethers.getContractAt(
    'EventTester',
    contractAddress
  );

  console.log('Triggering event...');
  const tx = await contract.triggerEvent(42); //This will emit an event
  await tx.wait();

  console.log('Event triggered successfully!');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
