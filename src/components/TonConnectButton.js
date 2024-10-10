// create a reusable component that connects the user’s TON wallet
// src/components/TonConnectButton.js
import { useEffect, useState } from 'react';
import { connectToTonWallet, restoreConnection } from '../tonConnect';

const TonConnectButton = () => {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState('');

  useEffect(() => {
    const restore = async () => {
      const wallet = await restoreConnection();
      if (wallet) {
        setConnected(true);
        setAddress(wallet.account.address);
      }
    };
    restore();
  }, []);

  const handleConnect = async () => {
    const wallet = await connectToTonWallet();
    if (wallet) {
      setConnected(true);
      setAddress(wallet.account.address);
    }
  };

  return (
    <div>
      {connected ? (
        <p>Connected to: {address}</p>
      ) : (
        <button onClick={handleConnect}>
          Connect TON Wallet
        </button>
      )}
    </div>
  );
};

export default TonConnectButton;
