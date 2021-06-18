import 'react-native-gesture-handler'

import React, { useEffect } from 'react'
import Routes_init from './Routes_init'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./app/reducers";
import messaging from '@react-native-firebase/messaging';

const store = createStore(
  reducers, //todo los reducers
  {}, //estado inicial
  applyMiddleware(reduxThunk) //Middleware
);

export default function App() {
  useEffect(() => {
    const unsubscribe = messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log("Push notification recibida", remoteMessage);
    });
  
    return unsubscribe;
  }, []);
  return (
    <Provider store={store}>
      <Routes_init />
    </Provider>
  )
}