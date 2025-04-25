// features/crypto/mockSocket.ts
import { AppDispatch } from '../../app/store';
import { updateAsset } from './cryptoSlice';

export const simulatePriceUpdate = () => (dispatch: AppDispatch) => {
  // Simulate update logic here, e.g. pick random asset and update it
  const updatedAsset = {
    id: 'bitcoin',
    price: Math.random() * 50000, // example random price
    percentChange1h: (Math.random() - 0.5) * 2,
    percentChange24h: (Math.random() - 0.5) * 5,
    volume24h: Math.random() * 1000000000,
  };
  dispatch(updateAsset(updatedAsset));
};
