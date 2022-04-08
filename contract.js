var web3js = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'))

var contract;
var contractdata;
var abi;  
var address;
var accounts;
var nonce;

fetch("build/contracts/Dontbuy.json")
  .then(response => response.json())
  .then(function(data){
    const CONTRACT_ADDRESS = data.networks[5777].address;
    const CONTRACT_ABI = data.abi;
    const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
    const ethcontract = new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
    );
    contract = ethcontract;
    abi = data.abi;
    address = data.networks[5777].address;
    contractdata = data;
  })
  .catch(error => console.log(error));

async function buyNFT(name) {
  accounts = await web3js.eth.getAccounts();
  nonce = await web3js.eth.getTransactionCount(address, 'latest');
  contract.methods.modifyToken(accounts[0],name).send({from:accounts[0]}).then(function()
  {
    window.location.href = "./danke.html";
  }).catch(function(error)
  {
    console.log(error);
  });
}

async function connect()
{
  let pubk = document.getElementById("publickey").value;
  let name = document.getElementById("name").value;
  let privkey = document.getElementById("privatekey").value;
  let keyboard = document.getElementById("keyboard").value;
  let age = document.getElementById("age").value;

  if(pubk.length > 0 &&
    name.length > 0 &&
    privkey.length > 0 &&
    keyboard.length > 0 &&
    age.length > 0)
  {
    await window.ethereum.enable().then(function(){
      buyNFT(name);
    });
  }
}



