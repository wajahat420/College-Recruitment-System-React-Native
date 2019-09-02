import React,{Fragment} from 'react'
import InputFeedback from "./inputFeedback"
import Navbar from "./feedback-navbar"

// import FeedbackUI from "./allFeedbacks/FeedbacksUI"
import AllFeedback from "./allFeedbacks/allFeedbacks"

// import "../../css/feedback.css"

import {Text,View,TouchableOpacity,ScrollView} from "react-native"

export default class main extends React.Component {
	state = {
		clicked : "all",
		sendFeedback : false
	}
	render(){
		let component = null
		if(this.state.clicked === "feedback"){
			component = <InputFeedback/>
		}else{
			component = <AllFeedback clicked={this.state.clicked}/>
		}
		return (
			
			<Fragment>
				<Navbar setClicked = {(e)=>this.setState({clicked : e})}/>
				<View style={{flexDirection : "row-reverse"}}>
					<TouchableOpacity onPress={()=> this.setState({clicked:"feedback"})} style={{flex: 1}}>
						<Text style={{textAlign : "right",marginRight : 3,color : "blue"}}>Send Feedack</Text>
					</TouchableOpacity>
				</View>
				<View >
					{component}
				</View>
			

			</Fragment>

		)
	}
}
