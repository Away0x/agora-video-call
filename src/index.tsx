import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
// import AgoraRTC from 'agora-rtc-sdk';

import '@/styles/index.less';
import App from './App';
import * as serviceWorker from '@/serviceWorker';

// AgoraRTC.Logger.enableLogUpload();

const renderApp = () => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
  );
}

renderApp();

serviceWorker.unregister();

