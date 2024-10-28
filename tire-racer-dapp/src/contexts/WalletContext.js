import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

const Login = () => {
  const { wallets, select, connect, disconnect, connected, publicKey } = useWallet();

  const handleConnect = async () => {
    // Find the Phantom wallet adapter and select it if available
    const phantomWallet = wallets.find(wallet => wallet.name === 'Phantom');
    if (phantomWallet) {
      select(phantomWallet.name);
      await connect();
    } else {
      console.error('Phantom wallet not found');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      {connected ? (
        <>
          <p>Connected: {publicKey.toBase58()}</p>
          <button onClick={disconnect}>Disconnect</button>
        </>
      ) : (
        <button onClick={handleConnect}>Connect to Phantom Wallet</button>
      )}
    </div>
  );
};

export default Login;
