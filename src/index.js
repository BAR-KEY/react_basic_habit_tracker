import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
// import SimpleHabit from './simpleHabit';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <SimpleHabit></SimpleHabit> */}
  </React.StrictMode>,
  document.getElementById('root')
);

