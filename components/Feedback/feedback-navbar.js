import React, { Component } from 'react'

import {View,Text,StyleSheet,TouchableOpacity} from "react-native"

export default class feedback_navbar extends Component {

	render() {
		return (

			<View style={{flexDirection : "row"}}>
				<TouchableOpacity onPress={()=>this.props.setClicked("all")} style={styles.navbar}>
					<Text style={{textAlign : "center"}}>All Feedbacks</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>this.props.setClicked("your")} style={styles.navbar}>
					<Text style={{textAlign : "center"}}>Your Feedback</Text>
				</TouchableOpacity>
				
			</View>
			// <div className="col-md-12 text-center h3 feedback-navbar p-0">
			// 	<div className="row m-0 p-0">
			// 		<div 
			// 			className={(this.props.checkClicked === "all"?"bgblue":"") + " col-md-6 p-2 border"}
			// 			onClick={()=>this.props.setClicked("all")}
			// 			>
			// 			All Feedbacks
			// 		</div>
			// 		<div 
			// 			className={(this.props.checkClicked === "your"?"bgblue":"") + " col-md-6 p-2 border"}
			// 			onClick={()=>this.props.setClicked("your")}
			// 			>
			// 			Your Feedback
			// 		</div>
			// 	</div>
			// </div>
		)
	}
}

const styles =  StyleSheet.create({
	navbar : {
		flex : 1,
		textAlign  :"center",
		borderWidth : 2,
		borderColor : "black",
		padding : 3
	}
})

