const hre = require("hardhat");
// console.log(hre);    //  检查使用可以使用这行代码

async function main() {
    const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    const ONE_YEARS_IN_SECONDS = 24 * 60 * 60;
    const unlockedTime = currentTimestampInSeconds + ONE_YEARS_IN_SECONDS;

    const lockedAmount = hre.ethers.utils.parseEther("0.1");

    // console.log(currentTimestampInSeconds);
    // console.log(ONE_YEARS_IN_SECONDS);
    // console.log(unlockedTime);
    // console.log(lockedAmount);

    const MyTest = await hre.ethers.getContractFactory("MyTest");
    const myTest = await MyTest.deploy(unlockedTime, {value:lockedAmount});

    await myTest.deployed();

    console.log(`Contract contain 0.1 ETH & address: ${myTest.address}`);
    // console.log(myTest);
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
})