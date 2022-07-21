const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Leonard", "Howard", "Sheldon", "Rajesh"],       // Names
        [
        "QmchDdrAGDrmbnyh6VsugGW1vz9YCrUbwsmZB3A4UTfFsv",
        "QmQKiihJyP6vftUABtTALmguGDSY5nwsytw7Ky1utTpEqT",
        "QmUjEy7JSWcfQD29zwkGCaw7GhPDQuSu2dRGuqDsnDhHpg",
        "QmRwejeu9an62j67FG2sCBR7BDUkjcdUNno33Ej2BaWR85"
    ],
        [100, 200, 300, 50],                    // HP values
        [100, 50, 25, 200],                       // Attack damage values
        "Penny",
        "QmSpLP9wpBW5nDTvbMYDJptMMr4vWbD3StV89FKyrpWb6v",
        10000,
        20
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();