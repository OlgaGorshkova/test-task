import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { createRootReducer, StorageState } from './reducers';

const createHistory = require('history').createBrowserHistory;

export const history = createHistory();

const middleware = [
    routerMiddleware(history),
];

const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
);

export const configureStore = () => createStore<StorageState, any, any, any>(
    createRootReducer(history),
    (window as any).__PRELOADED_STATE__,
    enhancer,
);
