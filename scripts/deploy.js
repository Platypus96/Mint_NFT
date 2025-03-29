async function main() {
    const MyNFT = await ethers.getContractFactory("MyNFT");
  
    // Start deployment, returning a promise that resolves to a contract object
    const myNFT = await MyNFT.deploy();
    console.log("Contract deployed to address:", myNFT.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
 //0x87cD56c72775528a515c1D13254EAFB8B955336E