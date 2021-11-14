import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import { socketMiddleware } from './middleware/socketMiddleware';

const wsUrl = 'wss://norma.nomoreparties.space/orders';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk, 
    socketMiddleware(wsUrl)
  )
);

export const store = createStore(
  rootReducer, 
  enhancer
);
