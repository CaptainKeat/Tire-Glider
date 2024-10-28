import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

const Login = () => {
  const { connect, disconnect, connected, publicKey } = useWallet();

  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      {connected ? (
        <>
          <p>Connected: {publicKey.toBase58()}</p>
          <button onClick={disconnect}>Disconnect</button>
        </>
      ) : (
        <button onClick={connect}>Connect to Phantom Wallet</button>
      )}
    </div>
  );
};

export default Login;
