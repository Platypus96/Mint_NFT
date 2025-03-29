require("dotenv").config();
const ethers = require('ethers');

// Load your API URL from the environment variables
const API_URL = process.env.API_URL; // Make sure to set this in your .env file
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// Create a provider using ethers.js with the API URL
const provider = new ethers.providers.JsonRpcProvider(API_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Import your contract's ABI from the JSON file
const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
const abi = contract.abi;

const contractAddress = "0x87cD56c72775528a515c1D13254EAFB8B955336E";
const nftContract = new ethers.Contract(contractAddress, abi, wallet);

// Function to mint NFT
async function mintNFT(tokenURI) {
    try {
        const tx = await nftContract.mintNFT(PUBLIC_KEY, tokenURI);
        console.log('Transaction Hash:', tx.hash);
        await tx.wait(); // Wait for the transaction to be mined
        console.log('NFT Minted!');
    } catch (error) {
        console.error('Error minting NFT:', error);
    }
}

// Call the mintNFT function
mintNFT("https://gateway.pinata.cloud/ipfs/QmQBjyufwMgzHR4iiymSz7sBnekqmGHqJTSzfjVX6pkTBX");
