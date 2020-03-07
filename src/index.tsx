import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
// import AgoraRTC from 'agora-rtc-sdk';

import '@/index.less';
import { isDev } from '@/config';
import configureStore from '@/store';
import App from './App';
import * as serviceWorker from '@/serviceWorker';

const store = configureStore();
(window as any).store = store;
// AgoraRTC.Logger.enableLogUpload();

const renderApp = () => {
  ReactDOM.render(
    <Router>
      <App store={store} />
    </Router>,
    document.getElementById('root')
  );
}

if (isDev()) {
  const devRender = () => {
    if ((module as any).hot) {
      (module as any).hot.accept('./App', () => renderApp());
    }

    renderApp();
  }

  try {
    devRender();
  } catch (error) {
    console.error(error);
    renderApp();
  }
} else {
  renderApp();
}

serviceWorker.unregister();

