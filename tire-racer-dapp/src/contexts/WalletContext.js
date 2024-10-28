import React, { createContext, useContext, useMemo } from 'react';
import { Connection } from '@solana/web3.js';
import {
  WalletProvider,
  ConnectionProvider
} from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

const WalletContext = createContext();

export const WalletContextProvider = ({ children }) => {
  const wallet = useMemo(() => [new PhantomWalletAdapter()], []);
  const connection = new Connection("https://api.devnet.solana.com");

  return (
    <ConnectionProvider endpoint="https://api.devnet.solana.com">
      <WalletProvider wallets={wallet} autoConnect>
        <WalletContext.Provider value={{ connection }}>
          {children}
        </WalletContext.Provider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export const useWalletContext = () => useContext(WalletContext);
