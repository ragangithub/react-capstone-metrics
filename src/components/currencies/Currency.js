import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CurrencyList from './CurrencyList';

const Currency = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { currencies, isLoading } = useSelector((store) => store.currencies);

  const lower = searchQuery.toLowerCase();

  const filtered = currencies.filter((currency) => currency.symbol.toLowerCase().includes(lower));

  if (isLoading) {
    return <div>Loading current data...</div>;
  }

  return (
    <div>
      <h1 className="title">CryptoCurrency Tracker</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search coin..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <CurrencyList currencies={filtered} />
    </div>
  );
};

export default Currency;
