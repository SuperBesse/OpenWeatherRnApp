import {applyMiddleware, createStore, AnyAction, Store} from 'redux';
import thunkMiddleware from 'redux-thunk';
import indexReducer from 'configuration/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'configuration/sagas';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';
import {Persistor} from 'redux-persist/es/types';

let reduxStore: Store<any, AnyAction>;
let persistor: Persistor;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  debug: __DEV__,
  whitelist: ['localState'],
};

const persistedReducer = persistReducer(persistConfig, indexReducer);

const sagaMiddleware = createSagaMiddleware();
reduxStore = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, thunkMiddleware),
);
persistor = persistStore(reduxStore);
sagaMiddleware.run(rootSaga);

export {reduxStore, persistor};
