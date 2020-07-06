import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './MusicApp/store'
import { App } from './S3Upload/index';

render(
  <Provider store={store}>
    <App />
  </Provider >
  , document.getElementById('app'));
