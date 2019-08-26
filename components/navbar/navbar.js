import React, { Component } from 'react'
import {
	Text,
	View,
	TouchableOpacity,
	StyleSheet,
	Button
	
} from "react-native"

export default class navbar extends Component {
	state = {
		sidebarClick : false
	}

	click = () => {
		console.warn("working")
	}
	render() {
		// console.warn("this.state.click",this.state.sidebarClick)
		return (
			<View style={styles.container}>
				<Text onPress={(e)=>this.click()}
					style={styles.links}>Students</Text>
				<Text onPress={(e)=>this.click()} 
					style={styles.links}>Students</Text>
				<Text onPress={(e)=>this.click()} 
					style={styles.links}>Feedbacks</Text>
				<Text onPress={(e)=>this.click()} 
					style={styles.links}>Login</Text>
				<TouchableOpacity onPress={()=>this.setState({sidebarClick  : !this.state.sidebarClick})} 
						style={ styles.sidebar}>
					<Text style={this.state.sidebarClick ? styles.Click : styles.lines} ></Text>
					<Text style={this.state.sidebarClick ? styles.Click : styles.lines}></Text>
					<Text style={this.state.sidebarClick ? styles.Click : styles.lines}></Text>
				</TouchableOpacity>
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
	Click : {
		margin : 2,
		width : 17,
		height: 2,
		backgroundColor : "red"
	},
	sidebar : {
		height : 17,
		display : "flex",
	},
	lines : {
		margin : 2,
		width : 17,
		height: 2,
		backgroundColor : "white"
	}
  })
