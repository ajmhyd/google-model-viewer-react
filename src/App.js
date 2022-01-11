import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';
import NFTContainer from './NFTContainer';
import ModelViewer from './Modelviewer';




function App3() {
  
  const [walletAddress, setWalletAddress] = useState(null)
  const [nfts, setNfts] = useState([])

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    
    setWalletAddress(accounts [0])

    }
  }

  const getNFTData = async () => {

    if(!walletAddress) return;

  
    const response = await fetch (`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`);
    
    const data = await response.json()

    setNfts(data.items)

    debugger

  }

  useEffect(() => {
    getNFTData()
  }, [walletAddress])


  return (
    <div className="App">
     <div class = "glow-on-hover" type= "button">
       Account: {walletAddress}
     </div>
     <button class="glow-on-hover" type="button" onClick={connectWallet}>
       Connect Wallet
     </button>
     <div>

     </div>
     <NFTContainer nfts={nfts} /> 
     
      <ModelViewer/>
    </div>
  );
}

export default App3;