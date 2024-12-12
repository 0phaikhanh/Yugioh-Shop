import React from 'react';
import ReactDOM from 'react-dom/client';  // Import từ 'react-dom/client'
import './index.css';
import App from './App';

// Sử dụng React 18 với createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));  // Tạo root mới
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
