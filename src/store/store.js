import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import immutableTransform from 'redux-persist-transform-immutable';
import reduxReset from 'redux-reset';

import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import Reactotron from './ReactotronConfig';

const persistConfig = {
    key: 'root',
    transforms: [immutableTransform()],
    storage: AsyncStorage,
    // timeout: 0,
    version: 1,
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk];
const composeEnhancers =
    (__DEV__ && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
const persistedReducer = persistReducer(persistConfig, rootReducer);
const enhancer = __DEV__
    ? composeEnhancers(applyMiddleware(...middlewares), reduxReset(), Reactotron.createEnhancer())
    : composeEnhancers(applyMiddleware(...middlewares), reduxReset());

const store = createStore(persistedReducer, undefined, enhancer);
const persister = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persister };
