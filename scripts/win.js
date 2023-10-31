// add the game address here and update the contract name if necessary
const gameAddr = "0x610178dA211FEF7D417bC0e6FeD39F05609AD788";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    //game2
    // const tx1=await game.setX(25);
    // tx1.wait();
    // const tx2=await game.setY(25);
    // tx2.wait();
    // const tx = await game.win();

    //game3
    //const tx=await game.win(45);
    //game4
    //const tx=await game.win(56);
    //game5
    // const tx1=await game.giveMeAllowance(100000);
    // tx1.wait();
    // const tx2=await game.mint(100000);
    // tx2.wait();
    // const tx=await game.win();
    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
