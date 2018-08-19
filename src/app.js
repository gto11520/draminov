import React from 'react';
import ReactDom from 'react-dom';

import AppRouter from './AppRouter';

import './styles/styles.scss';

const jsx = (
  <AppRouter />
)

ReactDom.render(jsx, document.getElementById('app'));
