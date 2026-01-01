import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Bootstrap JS (for modals, dropdowns, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Custom styles
import './styles/globals.css';
import './styles/custom.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
