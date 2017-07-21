// polyFills
import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import ReduxLayer from './ReduxLayer';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ReduxLayer>
    <App />
  </ReduxLayer>
  , document.getElementById('root'));
registerServiceWorker();
