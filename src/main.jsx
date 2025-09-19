import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Font loading optimization
document.documentElement.classList.add('fonts-loading');

// Check if fonts are loaded
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
    document.documentElement.classList.remove('fonts-loading');
    document.documentElement.classList.add('fonts-loaded');
  });
} else {
  // Fallback for browsers without Font Loading API
  setTimeout(() => {
    document.documentElement.classList.remove('fonts-loading');
    document.documentElement.classList.add('fonts-loaded');
  }, 100);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
