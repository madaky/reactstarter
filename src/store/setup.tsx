import {createStore, compose, applyMiddleware} from 'redux';
import {RootReducer} from './reducers/index.d';
import createSagaMiddleware from 'redux-saga';
import SetupSaga from './setup.saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { loadState } from './localstorage/load.state';
import { saveState } from './localstorage/store.state';

export const history = createBrowserHistory();

declare global{
    interface Window{
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&  
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const persistedState = loadState();

export const store = createStore(
                            RootReducer(history),
                            persistedState,
                            composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
                        );

store.subscribe(() => {
    saveState({
        AuthenticationReducer: store.getState().AuthenticationReducer
    });
    });
sagaMiddleware.run(SetupSaga);
    