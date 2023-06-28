import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CurrencyItem = ({ currency }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/details/${currency.name.toLowerCase()}`, {
      state: { currency },
    });
  };

  return (
    <div
      className="currency-card"
      key={currency.id}
      onClick={() => {
        handleDetails(currency);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleDetails(currency);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <h2 className="symbol">{currency.symbol}</h2>
      <p className="change">
        {currency.percent_change_1h < 0 ? (
          <>
            <FaChevronDown style={{ color: 'red' }} />
            <span style={{ color: 'red' }}>
              {Math.abs(currency.percent_change_1h)}
              %
            </span>
          </>
        ) : (
          <>
            <FaChevronUp style={{ color: 'green' }} />
            <span style={{ color: 'green' }}>
              {currency.percent_change_1h}
              %
            </span>
          </>
        )}
      </p>
    </div>
  );
};

export default CurrencyItem;
