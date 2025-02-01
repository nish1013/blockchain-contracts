# Blockchain Contracts Repository

## Overview
This repository contains multiple Solidity smart contracts, each designed for different use cases. It includes:
- Smart Contracts (`c1`, `c2`, etc.) for different blockchain applications.
- Hardhat development setup for compiling, testing, and deploying contracts.
- Subgraphs for indexing and querying blockchain data.
- Deployment scripts for automating contract deployments.

## Setup

### Install Dependencies
Ensure you have Node.js (>=16) installed, then run:
```sh
npm install
# OR
yarn install
```

### Create Your `.env` File
Copy `.env.example` and update the required variables:
```sh
cp .env.example .env
```
Inside `.env`, set your RPC URL and private key:
```plaintext
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
PRIVATE_KEY=your-private-key
```

### Compile Contracts
```sh
npx hardhat compile
```

### Run Tests
```sh
npx hardhat test
```
For gas usage analysis:
```sh
REPORT_GAS=true npx hardhat test
```

### Start a Local Blockchain
```sh
npx hardhat node
```

### Deploy Contracts
Deploy using Hardhat Ignition:
```sh
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

## Folder Structure (Per Contract)
```plaintext
blockchain_contracts/
│── c1/                     # Contract Set 1
│   ├── contracts/          # Solidity contracts
│   ├── scripts/            # Deployment and interaction scripts
│   ├── test/               # Unit tests
│   ├── artifacts/          # Compiled contract artifacts
│   ├── cache/              # Hardhat cache
│   ├── typechain/          # TypeScript bindings
│   ├── subgraph/           # Subgraph for indexing c1
│   │   ├── schema.graphql  # GraphQL schema
│   │   ├── subgraph.yaml   # Subgraph configuration
│   │   ├── mappings/       # Event handler mappings
│   ├── hardhat.config.ts   # Hardhat configuration
│   ├── package.json        # Dependencies
│   ├── README.md           # Contract-specific documentation
│
│── c2/                     # Contract Set 2
│   ├── contracts/
│   ├── scripts/
│   ├── test/
│   ├── artifacts/
│   ├── cache/
│   ├── typechain/
│   ├── subgraph/           # Subgraph for indexing c2
│   │   ├── schema.graphql
│   │   ├── subgraph.yaml
│   │   ├── mappings/
│   ├── hardhat.config.ts
│   ├── package.json
│   ├── README.md
│
│── .env                    # Environment variables (ignored)
│── .env.example            # Template for .env
│── .gitignore              # Ignored files
│── README.md               # Project documentation
```

## Supported Networks
| Network | Chain ID | RPC URL Required |
|---------|---------|------------------|
| Ethereum Sepolia | 11155111 | Yes |
| Ethereum Mainnet | 1 | Yes |
| Polygon Mumbai | 80001 | Yes |

Modify `hardhat.config.ts` to configure the network.

## Deployment Guide

### Deploy to Sepolia
```sh
npx hardhat run scripts/deploy.js --network sepolia
```

### Verify Contract on Etherscan
```sh
npx hardhat verify --network sepolia <DEPLOYED_CONTRACT_ADDRESS>
```

## Contributing
1. Fork this repository
2. Create a new branch (`git checkout -b feature-new-contract`)
3. Commit changes (`git commit -m "Added new contract"`)
4. Push branch (`git push origin feature-new-contract`)
5. Open a Pull Request

## License
This project is licensed under the MIT License.

## Contact
For questions, reach out via GitHub Issues.

