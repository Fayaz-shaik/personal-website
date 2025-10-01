import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PortfolioWebsite from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PortfolioWebsite />
  </React.StrictMode>
);
// in index.js or serviceWorker.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister();
    }
  });
}
