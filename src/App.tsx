import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Fallback from '@/components/Fallback';

const LoginPage = lazy(() => import(/* webpackChunkName: 'loginpage' */'@/pages/Login'));
const MeetingPage = lazy(() => import(/* webpackChunkName: 'meetingpage' */'@/pages/Meeting'));


function App({ store }: any) {
  return (
    <Provider store={store}>
      <Suspense fallback={<Fallback />}>
        <Switch>
          <Route exact path="/" render={() => <LoginPage />} />
          <Route path="/meeting" render={() => <MeetingPage />} />
        </Switch>
      </Suspense>
    </Provider>
  );
}

export default App;
