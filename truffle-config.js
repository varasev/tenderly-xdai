const fs = require('fs');
const HDWalletProvider = require("@truffle/hdwallet-provider");

function getPrivateKeys() {
  let privateKeys = fs.readFileSync(`${__dirname}/keys`, 'utf8').trim().split(/\r?\n/);
  privateKeys = privateKeys.map((key) => { return key.trim() });
  return privateKeys;
}

module.exports = {
  networks: {
    kovan: {
      provider: () => {
        const privateKeys = getPrivateKeys();
        return new HDWalletProvider(
          privateKeys,
          "https://kovan.infura.io/v3/1125fe73d87c4e5396678f4e3089b3dd",
          0,
          privateKeys.length
        )
      },
      network_id: 42,
      gasPrice: 5000000000,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "0.4.24",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    }
  }
}
