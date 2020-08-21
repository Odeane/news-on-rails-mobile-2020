import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/state/store/configureStore'
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import App from './App';

const ApplicationWrapper = () => {
  const store = configureStore()
  window.globalStore = store
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

registerRootComponent(ApplicationWrapper);
