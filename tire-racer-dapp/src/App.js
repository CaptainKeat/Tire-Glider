import React from 'react';
import { WalletContextProvider } from './contexts/WalletContext';
import Login from './components/Login';

const App = () => {
  return (
    <WalletContextProvider>
      <Login />
    </WalletContextProvider>
  );
};

export default App;
