import { useSelector } from 'react-redux';
import { selectAllAssets } from '../features/crypto/cryptoSelector';
import CryptoRow from './cryptoRow';

const CryptoTable = () => {
  const assets = useSelector(selectAllAssets);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-[900px] w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left"># </th>
            <th className="py-3 px-4 text-left">Logo </th>
            <th className="py-3 px-4 text-left">Name </th>
            <th className="py-3 px-4 text-left">Symbol</th>
            <th className="py-3 px-4 text-left">Price</th>
            <th className="py-3 px-4 text-left">1h %</th>
            <th className="py-3 px-4 text-left">24h %</th>
            <th className="py-3 px-4 text-left">7d %</th>
            <th className="py-3 px-4 text-left">Market Cap</th>
            <th className="py-3 px-4 text-left">24h Volume</th>
            <th className="py-3 px-4 text-left">Circulating Supply</th>
            <th className="py-3 px-4 text-left">Max Supply</th>
            <th className="py-3 px-4 text-left">7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <CryptoRow key={asset.id} asset={asset} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
