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
    console.log(data);

    const CONTRACT_ADDRESS = data.networks[5777].address;
    const CONTRACT_ABI = data.abi;
    const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545');
    const c_contract = new web3.eth.Contract(
        CONTRACT_ABI,
        CONTRACT_ADDRESS
    );
    console.log(c_contract);
    contract = c_contract;
    abi = data.abi;
    address = data.networks[5777].address;
    contractdata = data;
  })
  .catch(error => console.log(error));

async function buyNFT() {
  accounts = await web3js.eth.getAccounts();
  nonce = await web3js.eth.getTransactionCount(address, 'latest');
  contract.methods.mint(accounts[0],"Marc").send({from:accounts[0]});
}

function connect()
{
  console.log("connecting")
  let name = document.getElementById("name").value;
  console.log(name)
  if(name.length > 0)
  {
    window.ethereum.enable().then(function(){
      window.location.href = "captcha.html";
    })
  }
}
