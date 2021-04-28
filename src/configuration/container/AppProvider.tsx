import ReactNative from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import React from 'react';
import {Provider} from 'react-redux';
import {reduxStore, persistor} from 'configuration/store/ReduxStore';
import App from './App';

const globalAny: any = global;

if (__DEV__) {
  globalAny.React = React;
  globalAny.ReactNative = ReactNative;
}

const AppProvider = () => {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default AppProvider;
