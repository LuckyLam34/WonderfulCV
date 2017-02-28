import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

/* Dyn Css */
import '../bower_components/jquery/dist/jquery.min.js';
import '../bower_components/dyn-css/lib/dyncss.js';

import './styles/style.scss';

render(<App/>, document.getElementById('main'));