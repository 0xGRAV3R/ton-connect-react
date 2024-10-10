// set up the connection logic that allows the user to connect to their TON wallet
// src/tonConnect.js
import { TonConnect } from '@tonconnect/sdk';

const tonConnect = new TonConnect();

export const connectToTonWallet = async () => {
  try {
    const wallet = await tonConnect.connectWallet();
    return wallet;
  } catch (error) {
    console.error('Error connecting to TON wallet:', error);
  }
};

export const restoreConnection = async () => {
  try {
    const wallet = await tonConnect.restoreConnection();
    return wallet;
  } catch (error) {
    console.error('Error restoring connection:', error);
  }
};
