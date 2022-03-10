import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import {store} from './App/Store'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider >
  </React.StrictMode>,
  document.getElementById('root')
);

