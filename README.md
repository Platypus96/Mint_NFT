# Mint_NFT

Mint_NFT is a simple, user-friendly tool for minting NFTs onto your crypto wallet. It is built using **JavaScript** and **Solidity**, utilizing **Hardhat** for development and deployment.

## Features
- **NFT Minting**: Easily mint NFTs onto the Ethereum Sepolia testnet.
- **Transaction Hash Tracking**: Provides a transaction hash upon minting, which can be searched on [Sepolia Etherscan](https://sepolia.etherscan.io/).
- **Wallet Import**: Use the contract address from Etherscan to import your NFT into your crypto wallet.
- **Hardhat Integration**: Uses Hardhat for contract compilation and deployment.
- **Pinata IPFS Integration**: Stores NFT metadata and images on IPFS via Pinata.

## Technologies Used
- **JavaScript** for scripting and deployment.
- **Solidity** for writing the smart contract.
- **Hardhat** for Ethereum development.
- **Ethers.js** for interacting with the blockchain.
- **OpenZeppelin Contracts** for secure and standardized ERC721 implementation.
- **Alchemy SDK** for connecting to the Sepolia testnet.
- **Web3.js** for additional blockchain interactions.
- **Dotenv** for environment variable management.
- **Pinata IPFS** for decentralized storage of NFT metadata and images.

## Prerequisites
Ensure you have the following installed:
- **Node.js** (Latest LTS version)
- **Visual Studio Code (VS Code)**
- **Hardhat**
- **Sepolia Testnet Funds** (Get some test ETH from a faucet)

## Installation & Setup
### 1. Clone the Repository
```sh
git clone <repository-link>
cd Mint_NFT
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the project root and add:
```sh
API_URL = "https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY"
PRIVATE_KEY = "YOUR_WALLET_PRIVATE_KEY"
PUBLIC_KEY = "YOUR_WALLET_PUBLIC_KEY"
```
> **Note**: Never share your private key publicly.

### 4. Compile the Smart Contract
```sh
npx hardhat compile
```

### 5. Deploy the Smart Contract to Sepolia
```sh
npx hardhat run scripts/deploy.js --network sepolia
```
This will return a **contract address**.

### 6. Mint an NFT
Run the following command to mint an NFT:
```sh
node scripts/mint_nft.js
```
This will return a **transaction hash**.

## How It Works
1. **Run the minting script** using Node.js.
2. **Obtain the transaction hash** from the terminal.
3. **Search the transaction hash** on [Sepolia Etherscan](https://sepolia.etherscan.io/).
4. **Get the NFT contract address** from Etherscan.
5. **Import the NFT into your wallet** using the contract address.
6. **Pinata IPFS stores metadata and images**, ensuring decentralized access.

## Project Structure
```
Mint_NFT/
│── contracts/        # Contains Solidity smart contracts
│── scripts/         # Scripts for deployment and minting
│── .env             # Environment variables (not shared)
│── package.json     # Project dependencies
│── hardhat.config.js # Hardhat configuration
```

## Notes
- The process must be run manually using VS Code and Node.js.
- The tool is **beginner-friendly**.
- Uses **Ethereum Sepolia Testnet**.
- Utilizes **Pinata IPFS** for decentralized storage.

## License
This project is open-source. Feel free to modify and improve it!

---
Let me know if you need any modifications! 🚀

