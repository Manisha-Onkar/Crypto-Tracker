import React from 'react';
import { CryptoAsset } from '../features/crypto/cryptoSlice';

type CryptoRowProps = {
  asset: CryptoAsset;
  index: number;
};

const CryptoRow: React.FC<CryptoRowProps> = ({ asset, index }) => {
  // Utility to color % changes
  const getChangeColor = (val: number) =>
    val >= 0 ? 'text-green-600' : 'text-red-600';

  return (
    <tr className="border-b border-gray-300">
      <td className="py-2 px-3">{index + 1}</td>
      <td className="py-2 px-3">
        <img src={asset.logo} alt={asset.name} width={24} height={24} />
      </td>
      <td className="py-2 px-3">{asset.name}</td>
      <td className="py-2 px-3 uppercase">{asset.symbol}</td>
      <td className="py-2 px-3">${asset.price.toLocaleString()}</td>

      <td className={`py-2 px-3 font-semibold ${getChangeColor(asset.percentChange1h)}`}>
        {asset.percentChange1h.toFixed(2)}%
      </td>
      <td className={`py-2 px-3 font-semibold ${getChangeColor(asset.percentChange24h)}`}>
        {asset.percentChange24h.toFixed(2)}%
      </td>
      <td className={`py-2 px-3 font-semibold ${getChangeColor(asset.percentChange7d)}`}>
        {asset.percentChange7d.toFixed(2)}%
      </td>

      <td className="py-2 px-3">${asset.marketCap.toLocaleString()}</td>
      <td className="py-2 px-3">${asset.volume24h.toLocaleString()}</td>
      <td className="py-2 px-3">{asset.circulatingSupply.toLocaleString()}</td>
      <td className="py-2 px-3">{asset.maxSupply ? asset.maxSupply.toLocaleString() : '—'}</td>

      <td className="py-2 px-3">
        <svg
          width="80"
          height="30"
          viewBox="0 0 80 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            fill="none"
            stroke="#4caf50"
            strokeWidth="2"
            points="0,20 10,15 20,18 30,10 40,12 50,8 60,9 70,7 80,5"
          />
        </svg>
      </td>
    </tr>
  );
};

export default CryptoRow;
