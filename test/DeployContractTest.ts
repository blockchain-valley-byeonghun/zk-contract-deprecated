import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Feedback Contract", function () {
  async function deployFeedbackContract() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    const semaphoreContractAddress = '0x40A6ad127e3b4C8077af42a2437cCbd3cdC7609f';
    const sbtContractAddress = '0x6d7DEFc10BA387497fc5e8B2C03Ae13ef8bd5403';
    const Feedback = await ethers.getContractFactory("Feedback");
    const feedback = await Feedback.deploy(semaphoreContractAddress, sbtContractAddress);
    return { feedback, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const {feedback, owner} = await loadFixture(deployFeedbackContract);
      expect(await feedback.owner()).to.equal(owner.address);
    });
  });
});
