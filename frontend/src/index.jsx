import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import FilterArray from './components/FilterArray'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <FilterArray />
  </React.StrictMode>
);

