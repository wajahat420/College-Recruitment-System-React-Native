import React, { Component } from 'react'
import Feedback from "./FeedbacksUI"
// import axios from "axios"
import {connect} from "react-redux"
import {Text,View,TouchableOpacity,ScrollView} from "react-native"

class allFeedbacks extends Component {
	constructor(){
		super()
		// axios.get("/getAllFeedbacks")
		// .then(res=>this.setState({allFeedbacks : res.data}))
		// .catch((err)=>alert("Error "+err))
	}
	// state = {
	// 	allFeedbacks : []
	// }

	filter = (elem) => {
		const {clicked,signin} = this.props
		// console.log("clicked",clicked/)
		if(clicked === "all"){
			return true
		}else{
			// console.log("signin email",signin.email)
			// console.log("elem.email",elem.email)
			return signin.email === elem.email
		}


	}
	render() {
		return (
			<View>
					{
						this.props.allFeedbacks.filter((elem)=>this.filter(elem)).map((elem,index)=>{
							
							var email = elem.email.slice(0,elem.email.indexOf("@"))

							
							return(
								<View key={index} className="col-md-4 ">
									<Feedback
										email={email}
										criteria={elem.fulfillingCriteria}
										req={elem.requirementFulfill}
										searched={elem.searchingFor}
										web={elem.webExperience}
										comments = {elem.comments}
										/>
								</View>
							)
						})
					}

			</View>
			
		)
	}
}
const mapStateToProps = (state) => {
	return{
		signin : state.signin,
		allFeedbacks : state.AllFeedacks
	}
}
export default connect(mapStateToProps)(allFeedbacks)