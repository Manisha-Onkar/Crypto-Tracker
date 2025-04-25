import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from './app/store'; // Import your typed dispatch
import CryptoTable from './components/cryptoTable';
import { simulatePriceUpdate } from './features/crypto/mockSocket';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();  // Use typed dispatch here

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(simulatePriceUpdate());  // This is now typed correctly
    }, 1500);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div>
      <h1>Crypto Tracker</h1>
      <CryptoTable />
    </div>
  );
};

export default App;
