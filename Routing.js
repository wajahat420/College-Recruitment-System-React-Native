//This is an example code for the Custom Header//
import React, { Component } from 'react';
//import react in our code. 
 
//For react-navigation 2.0+ import createStackNavigator only
//import {createStackNavigator,} from 'react-navigation';
//For react-navigation 3.0+ import createStackNavigator and createAppContainer
import {createStackNavigator,createAppContainer} from 'react-navigation';
 
import FirstPage from './first';
import SecondPage from './second';
import ThirdPage from "./third"
import Navbar from "./components/navbar/navbar"
import News_Feeds from  "./components/News-Feeds/News-feeds"
//import all the screens we are going to switch 
 
const App = createStackNavigator({
    FirstPage: { screen: FirstPage },
	SecondPage: { screen: SecondPage }, 
	News_Feeds : {screen : News_Feeds},
	ThirdPage : {screen : ThirdPage}	
  },
  {
    initialRouteName: 'FirstPage',
  }
);
//For react-navigation 2.0+ export default class App direct
//export default App;
//For react-navigation 3.0+ change it to following
export default createAppContainer(App);
