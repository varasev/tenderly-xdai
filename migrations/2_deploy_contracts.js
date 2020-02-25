const fs = require('fs');
const assert = require('assert');

const PoaNetworkConsensus = artifacts.require('PoaNetworkConsensus');

module.exports = async (deployer, network, accounts) => {
    await deployer;
    await deployer.deploy(PoaNetworkConsensus, '0xCace5b3c29211740E595850E80478416eE77cA21', []);
}

// To deploy on Kovan, run `npm run deploy -- --network kovan`