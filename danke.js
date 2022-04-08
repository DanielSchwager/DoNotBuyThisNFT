var web3js = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'))

var contract;
var contractdata;
var abi;  
var address;
var accounts;
var nonce;

async function getdata()
{
  let title = await contract.methods.title().call();
  let thename = await contract.methods.name().call();
  let datemillis = await contract.methods.buydate().call();

  let pubkey = document.getElementById("pubkey");
  let name = document.getElementById("name");
  let date = document.getElementById("date");

  pubkey.innerHTML = "Public key: " + address;
  name.innerHTML = "Name: " + title + " " + thename;
  date.innerHTML = "Kaufdatum: " + new Date(datemillis).toString();
}

  async function load()
  {
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
    .then(function()
    {

    });
  }

  load();

async function showNFT()
{
  let pubkey = document.getElementById("pubkey");
  let name = document.getElementById("name");
  let date = document.getElementById("date");

  let title = await contract.methods.title().call();
  let thename = await contract.methods.name().call();
  let datemillis = await contract.methods.buydate().call();
  pubkey.innerHTML = "Public key: " + address;
  name.innerHTML = "Name: " + title + " " + thename;
  date.innerHTML = "Kaufdatum: " + new Date(datemillis).toString();

}