import { ethers } from 'hardhat';
import { getDatetimeString } from '../utils/timeUtils';
async function main() {
  const currentTimestampInSeconds = Math.round(Date.now());
  const contractCreatedTime = getDatetimeString(currentTimestampInSeconds)
  const Feedback = await ethers.getContractFactory("Feedback");
  const feedback = await Feedback.deploy('0x40A6ad127e3b4C8077af42a2437cCbd3cdC7609f', '0x6d7DEFc10BA387497fc5e8B2C03Ae13ef8bd5403');

  await feedback.deployed();

  console.log(
    `${feedback.address} contract is deployed at ${contractCreatedTime}`
  );
  console.log(`
 click this link if you deploy contract on Ethereum Sepolia Testnet
 https://sepolia.etherscan.io/address/${feedback.address} \n
 click this link if you deploy contract on Bianace Smart Chain Testnet
 https://testnet.bscscan.com/address/${feedback.address} \n
 click this link if you deploy contract on Polygon Mumbai Testnet
 https://mumbai.polygonscan.com/address/${feedback.address} \n
  `)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
