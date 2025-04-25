import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { CryptoAsset } from './cryptoSlice';

// Select the crypto slice state (an object with .assets array)
export const selectCryptoState = (state: RootState) => state.crypto;

// Select the assets array from the crypto slice
export const selectAllAssets = createSelector(
  [selectCryptoState],
  (crypto): CryptoAsset[] => crypto.assets
);

// Select top 3 gainers based on percentChange24h
export const selectTopGainers = createSelector(
  [selectAllAssets],
  (assets) => {
    return [...assets].sort((a, b) => b.percentChange24h - a.percentChange24h).slice(0, 3);
  }
);
