var Web3 = require('web3');

const Dontbuy = artifacts.require("Dontbuy");

console.log(Dontbuy);

module.exports = function (deployer) {
  deployer.deploy(Dontbuy);
};
