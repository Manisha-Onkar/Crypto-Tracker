import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CryptoAsset {
  id: string;
  logo: string;
  name: string;
  symbol: string;
  price: number;
  percentChange1h: number;
  percentChange24h: number;
  percentChange7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply?: number;
}

// Initial mock data (5 assets)
const initialState = {
  assets: [
    {
      id: 'bitcoin',
      logo: 'https://bitcoin.org/img/icons/opengraph.png',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 60000,
      percentChange1h: 0.5,
      percentChange24h: -2.1,
      percentChange7d: 5.3,
      marketCap: 1120000000,
      volume24h: 400000000,
      circulatingSupply: 18700000,
      maxSupply: 21000000,
    },
    {
      id: 'ethereum',
      logo: 'https://ethereum.org/favicon.ico',
      name: 'Ethereum',
      symbol: 'ETH',
      price: 4000,
      percentChange1h: 0.2,
      percentChange24h: -1.5,
      percentChange7d: 3.2,
      marketCap: 480000000,
      volume24h: 250000000,
      circulatingSupply: 116000000,
      maxSupply: undefined,
    },
    {
      id: 'cardano',
      logo: 'https://assets.coingecko.com/coins/images/975/large/cardano.png',
      name: 'Cardano',
      symbol: 'ADA',
      price: 1.2,
      percentChange1h: -0.1,
      percentChange24h: 0.5,
      percentChange7d: -2.3,
      marketCap: 38000000,
      volume24h: 12000000,
      circulatingSupply: 32000000000,
      maxSupply: 45000000000,
    },
    {
      id: 'solana',
      logo: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
      name: 'Solana',
      symbol: 'SOL',
      price: 150,
      percentChange1h: 1.2,
      percentChange24h: 2.5,
      percentChange7d: 7.8,
      marketCap: 50000000,
      volume24h: 17000000,
      circulatingSupply: 340000000,
      maxSupply: undefined,
    },
    {
      id: 'ripple',
      logo: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png',
      name: 'Ripple',
      symbol: 'XRP',
      price: 0.9,
      percentChange1h: -0.3,
      percentChange24h: -0.8,
      percentChange7d: 1.4,
      marketCap: 42000000,
      volume24h: 13000000,
      circulatingSupply: 47000000000,
      maxSupply: 100000000000,
    },
  ],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAsset: (state, action: PayloadAction<Partial<CryptoAsset> & { id: string }>) => {
      const { id, ...updates } = action.payload;
      const asset = state.assets.find((a) => a.id === id);
      if (asset) {
        Object.assign(asset, updates);
      }
    },
  },
});

export const { updateAsset } = cryptoSlice.actions;
export default cryptoSlice.reducer;
