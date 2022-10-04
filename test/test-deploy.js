const { ethers } = require("hardhat")
const { assert, equal, expect } = require("chai")

describe("", () => {
    let contractFactory, simpleStorage
    beforeEach(async function () {
        contractFactory = await ethers.getContractFactory("SimpleStorage")
        simpleStorage = await contractFactory.deploy()
    })

    it("Should start with favourite number 0", async function () {
        const currentValue = await simpleStorage.retrieve()
        const expectedValue = "0"

        assert.equal(currentValue.toString(), expectedValue)

        // Both assert and expect are used to verify or equate value and check
        //expect(currentValue).to.equal(expectedValue);
    })
})
