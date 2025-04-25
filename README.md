# 📘 Real-Time Crypto Price Tracker

A responsive crypto price tracker built with **React**, **Redux Toolkit**, and **TypeScript** that simulates real-time updates for major cryptocurrencies like Bitcoin and Ethereum.

## 🎯 Objective

Track real-time price movements of 5 crypto assets with a responsive UI table and mock WebSocket updates — inspired by CoinMarketCap.

---

## 🛠️ Tech Stack

- **React** (Functional Components + Hooks)
- **Redux Toolkit** for state management
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Mock WebSocket (setInterval)** to simulate live price updates

---

## 📊 Features

- ✅ Display table of 5 crypto assets:
  - `# | Logo | Name | Symbol | Price | 1h % | 24h % | 7d % | Market Cap | 24h Volume | Circulating Supply | Max Supply | 7D Chart`
- ✅ Color-coded percentage changes (green for positive, red for negative)
- ✅ 7-day chart (static SVG)
- ✅ Responsive design (mobile/tablet friendly)
- ✅ State entirely managed via **Redux Toolkit**
- ✅ Real-time updates every 1.5 seconds (simulated via `setInterval`)

---

## 🔄 Architecture
src/ ├── app/ # Redux store setup
├── components/ # UI Components│ └── CryptoTable.tsx
├── features/ │ └── crypto/ │ ├── cryptoSlice.ts # Redux slice │
├── mockSocket.ts # Mock WebSocket 
├── selectors.ts # Memoized selectors ├── assets/ # Static icons/images

---

## 🧪 Simulated WebSocket

In `mockSocket.ts`, we simulate a WebSocket by:
- Randomly updating `price`, `% changes`, and `volume24h`
- Dispatching `updateAsset` Redux actions
- Interval: every 1.5 seconds

---

## 🚀 Getting Started

1. **Clone repo**  
```bash
git clone https://github.com/Manisha-Onkar/Crypto-Tracker.git
cd Crypto-Tracker


