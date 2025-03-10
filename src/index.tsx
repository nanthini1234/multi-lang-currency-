import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import './i18n';
import reportWebVitals from './reportWebVitals';

// Get the root element
const container = document.getElementById('root');

// Ensure the root element exists
if (container) {
  const root = createRoot(container); // Create a root

  // Render the app
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();