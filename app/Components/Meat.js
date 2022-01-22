import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const Meat = () => {
  const [disabled, setDisabled] = useState(false);
  const [account, setAccount] = useState(null);
  const [mintingMessage, setMintingMessage] = useState('');
  const { ethereum } = window;

  const getAccount = async () => {
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    setAccount(accounts[0]);
  };

  const connect = async () => {
    if (ethereum) {
      try {
        setDisabled(true);
        await ethereum.request({ method: 'eth_requestAccounts' });
        getAccount();
      } catch (error) {
        alert(error.message);
        setDisabled(false);
      }
    } else {
      alert('Please install metamask!');
    }
  };

  const mint = () => {
    setMintingMessage('minting...');
    setTimeout(() => {
      setMintingMessage('success!');
    }, 2000);
  };

  useEffect(async () => {
    if (ethereum.selectedAddress) {
      setDisabled(true);
      getAccount();
    }
  }, []);

  return (
    <div className="meat">
      <div className="icon-container">
        <img className="icons" src="assets/images/mouse.jpg"></img>
        <button onClick={connect} disabled={disabled}>
          {account ? 'connected' : 'connect wallet'}
        </button>
      </div>
      <div className="icon-container">
        <img className="icons" src="assets/images/head.jpg"></img>
        <button onClick={mint}>mint.eth</button>
      </div>
      <div className="icon-container">
        <img className="icons" src="assets/images/face.jpg"></img>
        <button>darbytrash.link</button>
      </div>
      <div className="icon-container">
        <img className="computer" src="assets/images/computer.png"></img>
        <div id="minting">{mintingMessage}</div>
      </div>
      <div className="sidebar">
        <div className="square up"></div>
        <div className="square down"></div>
      </div>
    </div>
  );
};

export default Meat;
