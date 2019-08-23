import React, { Component } from 'react'
import {
	Text,
	View,
	FlatList,
	ListView,
	StyleSheet,
	Button
	
} from "react-native"
// import { Button } from 'native-base';

export default class navbar extends Component {
	click = () => {
		console.warn("working")
	}
	render() {
		return (
			<View style={styles.container}>
				<Button 
					title="feeds"
					onPress={() => {
						this.props.navigation.navigate('SecondPage');
					  }}				 	style={styles.links}>Feeds</Button>
				<Text onPress={(e)=>this.click()} 
					style={styles.links}>Students</Text>
				<Text onPress={(e)=>this.click()} 
					style={styles.links}>Feedbacks</Text>
				<Text onPress={(e)=>this.click()} 
					style={styles.links}>Login</Text>
				<View onResponderEnd={()=>this.click()} style={styles.sidebar}>
					<Text onPress={(e)=>this.click()} style={styles.lines} ></Text>
					<Text onPress={(e)=>this.click()} style={styles.lines}></Text>
					<Text onPress={(e)=>this.click()} style={styles.lines}></Text>
					{/* <Text style={styles.lines}></Text> */}
				</View>
		  </View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		color : "white",
		backgroundColor : "rgb(64, 64, 224)",
		display : "flex",
		flexDirection : "row" ,
		paddingTop: 4,
		padding : 10,
		
		alignItems: 'center', 

	},
	links : {
		
		flex  : 1,
		color:"white",
		fontSize : 14,
		textAlign : "center"
	},
	sidebar : {
		height : 15,
		// paddingTop : 3,
		display : "flex",
		flexDirection : "column"
	},
	lines : {
		margin : 2,
		width : 17,
		height: 2,
		color : "white",
		backgroundColor : "white"
	}
  })
