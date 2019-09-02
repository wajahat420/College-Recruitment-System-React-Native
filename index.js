/**
 * @format
 */
import React from "react"
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Text} from "react-native"
const A = () =>{
	return <Text>a</Text>
}

import {Provider} from "react-redux"
import reducer from "./store/store"
import { createStore } from 'redux';
import {crea} from "redux"
const store = createStore(reducer)

const RNRedux = () => (
	<Provider store = { store }>
	  <App />
	 </Provider>
  )


AppRegistry.registerComponent(appName, () => RNRedux);
