import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import deployContract from "./deploy";
import transfer from './transfer';

const provider = new ethers.providers.Web3Provider(window.ethereum);

function App() {
  const [account, setAccount] = useState();
  const [signer, setSigner] = useState();
  const [contract, setContract] = useState();
  const [tokens, setTokens] = useState(0);
  
  useEffect(() => {
    async function getAccounts() {
      const accounts = await provider.send('eth_requestAccounts', []);
      console.log("Accounts: ", accounts);
      setAccount(accounts[0]);
      setSigner(provider.getSigner());
    }   
    getAccounts();
  }, [account]
  );

  async function updateBalance(){
    if (contract){
      const tokens = await contract.balanceOf(account);
      console.log("Tokens: ", tokens);
      setTokens(tokens.toString());
    }
  }

  async function deployNewContract() {
    const newContract = await deployContract(signer);
    console.log("New contract: ", newContract);
    setContract(newContract);
    updateBalance();
  }

  async function transferToken(){
    const address = document.getElementById("address").value;
    const amount  = document.getElementById("amount").value;
    console.log("Signer: ", signer);
    console.log("Contract: ", contract);
    await transfer(contract, signer, address, amount);
    updateBalance();
  }

  return (
    <div>
      <h1>Token vending machine</h1>
      <div><p>Owner: {account} has {tokens} Tokens </p></div>

      <div
          className="button"
          id="deploy"
          onClick={(e) => {
            e.preventDefault();

            deployNewContract();
          }}
        >
          Deploy
        </div>

        <div>
          <label>Send to: 
            <input type="text" id="address"/>
          </label>
          <label>Amount:
            <input type="text" id="amount"/>
          </label>
          <div
          className="button"
          id="transfer"
          onClick={(e) => {
            e.preventDefault();

            transferToken();
          }}
        >
          Transfer
        </div>
        </div>

    </div>
  );
}

export default App;
