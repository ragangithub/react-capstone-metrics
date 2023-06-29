import './App.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrencies } from './redux/currency/currencySlice';

import Currency from './components/currencies/Currency';
import Details from './components/details/Details';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrencies());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Currency />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
