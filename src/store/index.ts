import { createStore, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '@/store/reducers';

const middleware: Middleware[] = [thunk];
if (process.env.REACT_APP_REDUX_LOG !== 'production') {
  middleware.push(createLogger());
}

const configureStore = (preloadedState?: any) =>
  createStore(rootReducer, preloadedState, applyMiddleware(...middleware));

export default configureStore;
