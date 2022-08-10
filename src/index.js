import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store'
import { Box } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
  <Box sx={{background: "linear-gradient(to right, #c9ffbf, #ffafbd)"}}></Box>
    <App />
  <Box/>
  </Provider>

);


