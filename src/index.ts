import * as React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './main.scss';

import App from './app/App';

const root = document.getElementById('root');
render(React.createElement(App), root);
