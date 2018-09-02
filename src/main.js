'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import 'bootstrap';
import './scss/main.scss';
import '@babel/polyfill';

ReactDOM.render(<App />, document.getElementById('app'));
