import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Fallback from '@/components/Fallback';
import RootProvider from '@/containers/root';

const LoginPage = lazy(() => import(/* webpackChunkName: 'loginpage' */'@/pages/Login'));
const MeetingPage = lazy(() => import(/* webpackChunkName: 'meetingpage' */'@/pages/Meeting'));


function App() {
  return (
    <RootProvider>
      <Suspense fallback={<Fallback />}>
        <Switch>
          <Route exact path="/" render={() => <LoginPage />} />
          <Route path="/meeting" render={() => <MeetingPage />} />
        </Switch>
      </Suspense>
    </RootProvider>
  );
}

export default App;
