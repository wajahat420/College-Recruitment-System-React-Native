// import {createStackNavigator,createAppContainer} from 'react-navigation';

import Navbar from "./components/navbar/navbar"
// import Signin from "./components/Signin/Signin"
// import NewsFeeds from  "./components/News-Feeds/News-feeds"
import Feedback from "./components/Feedback/main"

// import Routing from "./Routing"
import FirstPage from './first';
import SecondPage from './second';

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


// const Navigate = createStackNavigator({
//   FirstPage: { screen: FirstPage },
//   SecondPage: { screen: SecondPage }, 
//   NewsFeeds : {screen : NewsFeeds}	
// },
// {
// initialRouteName: 'FirstPage',
// }
// );
// const Routing = createAppContainer(Navigate)

class App extends React.Component {

  state = {
    sidebar : true
  }

  render(){
      return (
        
        <Fragment>
          
          <Navbar/>
          {/* <NewsFeeds/> */}
          <Feedback/>
          {/* <Routing/> */}
          {/* <Signin/> */}
        </Fragment>
      );
  }

};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;










