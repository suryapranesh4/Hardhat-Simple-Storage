const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
    //hre here is similar to hardhat package , access to functions
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block number: ${blockNumber}`)
    }
)

module.exports = {}
