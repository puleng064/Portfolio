import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your App component
import './index.css';    // Import global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Make sure this matches the div id in your index.html
);
