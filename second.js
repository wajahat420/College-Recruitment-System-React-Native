//This is an example code for the Custom Header//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
//import all the components we are going to use.
 
export default class SecondPage extends Component {
  //Navigation option to create menu in header
//   static navigationOptions = ({ navigation }) => {
//     return {
//       //Heading/title of the header
//       title: navigation.getParam('Title', 'Left Right Custom Header'),
//       //Heading style
//       headerStyle: {	
//         backgroundColor: navigation.getParam('BackgroundColor', 'red'),
//       },
//       //Heading text color
//       headerTintColor: navigation.getParam('HeaderTintColor', '#fff'),
//       headerRight: (
//         <TouchableOpacity onPress={() => alert('Right Menu Clicked')}>
//           <Text
//             style={{
//               color: 'white',
//             }}>
//             Right Menu
//           </Text>
//         </TouchableOpacity>
//       ),
//       headerLeft: (
//         <TouchableOpacity onPress={() => navigation.navigate('FirstPage')}>
//           <Text
//             style={{
//               color: 'white',
//             }}>
//             Left Menu
//           </Text>
//         </TouchableOpacity>
//       ),
//     };
//   };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Left and Right Custom menu options</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});