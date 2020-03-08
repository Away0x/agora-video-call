import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Fallback from '@/components/Fallback';

const LoginPage = lazy(() => import(/* webpackChunkName: 'loginpage' */'@/pages/Login'));
const MeetingPage = lazy(() => import(/* webpackChunkName: 'meetingpage' */'@/pages/Meeting'));


function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Switch>
        <Route exact path="/" render={() => <LoginPage />} />
        <Route path="/meeting" render={() => <MeetingPage />} />
      </Switch>
    </Suspense>
  );
}

export default App;
