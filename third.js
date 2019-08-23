//This is an example code for the Custom Header//
import React, { Component } from 'react';
//import react in our code
import { View, Text, Button } from 'react-native';
//import all the components we are going to use.
 
class FirstPage extends Component {
  //Navigation option to create menu in header
//   static navigationOptions = ({ navigation }) => {
    //return header with Custom View which will replace the original header 
    // return {
//       header: (
//         <View
//           style={{
//             height: 45,
//             marginTop: 20,
//             backgroundColor: 'red',
//             justifyContent: 'center',
//           }}>
//           <Text
//             style={{
//               color: 'white',
//               textAlign: 'center',
//               fontWeight: 'bold',
//               fontSize: 18,
//             }}>
//             This is Custom Header
//           </Text>
//         </View>
//       ),
//     };
//   };
 
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, backgroundColor: '#ffdffd' }}>
        <View
          style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
				THIRD
          </Text>
          <Button
            title="Click to see left right align header"
            onPress={() => {
              this.props.navigation.navigate('FirstPage');
            }}
          />
        </View>
      </View>
    );
  }
}
export default FirstPage;