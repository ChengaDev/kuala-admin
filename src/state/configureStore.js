import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import initialState from './initialState';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import 'regenerator-runtime/runtime';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(middleware)
    );
    sagaMiddleware.run(rootSaga);

    return store;
}
