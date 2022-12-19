import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Filter from './components/Filter'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Filter />
  </React.StrictMode>
);

