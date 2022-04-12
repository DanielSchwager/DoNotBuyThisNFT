var Web3 = require('web3');

const Dontbuy = artifacts.require("Dontbuy");
/* const Dontbuy2 = artifacts.require("ERC721");
const Dontbuy3 = artifacts.require("ERC721MetaData"); */

console.log(Dontbuy);

module.exports = function (deployer) {
  deployer.deploy(Dontbuy);
/*   deployer.deploy(Dontbuy2);
  deployer.deploy(Dontbuy3); */
};
