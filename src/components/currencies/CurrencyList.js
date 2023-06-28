import React from 'react';
import CurrencyItem from './CurrencyItem';
import '../../styles/currency.css';

const CurrencyList = ({ currencies }) => (
  <>
    <ul className="currency-container">
      {currencies.map((currency) => (
        <CurrencyItem key={currency.id} currency={currency} />
      ))}
    </ul>
  </>
);

export default CurrencyList;
