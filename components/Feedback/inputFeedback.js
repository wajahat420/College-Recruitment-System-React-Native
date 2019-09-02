import React from 'react'
import Remarks from "./remarks"
import {connect} from "react-redux"
// import axios from "axios"


import {
	Text,
	TouchableOpacity,
	View,
	TextInput,
	ScrollView,
	Button
	
} from "react-native"
import RadioForm from 'react-native-simple-radio-button';

const yesNo = [
	{label : "Yes",value : 0},
	{label : "No",value : 1}
]
const searchingFor = [
	{label : "Job",value : 0},
	{label : "Internship",value : 1},
	{label : "Other",value : 2}
]
class main extends React.Component {
	state ={ 
		clickedDiv : 0,
		comments : "",
		fulfillingCriteria : -1,
		webExperience : -1,
		requirementFulfill : -1,
		searchingFor : -1,
		value: 0,
	}



	submit = () =>{
		console.log("signin",this.props.signin)
		const {signin} = this.props
		let{comments,fulfillingCriteria,webExperience,requirementFulfill,searchingFor} = this.state
		


		if(!signin){
			alert("Plese Login First")
		}

		else if(fulfillingCriteria >= 0  && webExperience >= 0  && requirementFulfill >= 0 && searchingFor >= 0){

			if(webExperience >=0 && webExperience <= 4){
				webExperience = "Bad"
			}else if(webExperience >=5 && webExperience <= 7){
				webExperience = "Good"
			}else{
				webExperience = "Excellent"
			}
	
			if(fulfillingCriteria >=0 && fulfillingCriteria <= 4){
				fulfillingCriteria = "Bad"
			}else if(fulfillingCriteria >=5 && fulfillingCriteria <= 7){
				fulfillingCriteria = "Good"
			}else{
				fulfillingCriteria = "Excellent"
			}
	
			if(requirementFulfill === 0){
				requirementFulfill = "Yes"
			}else{
				requirementFulfill = "No"
			}
	
			if(searchingFor === 0){
				searchingFor = "Job"
			}else if(searchingFor === 1){
				searchingFor = "Internship"
			}else{
				searchingFor = "Other"
			}

			const feedback = {
				email : signin.email,
				webExperience,
				fulfillingCriteria,
				requirementFulfill,
				searchingFor,
				comments
			}

			this.props.insertFeeback(feedback)


			// axios.post("/submitFeedback",{
			// 	email : signin.email,
			// 	fulfillingCriteria,
			// 	webExperience,
			// 	requirementFulfill,
			// 	searchingFor,
			// 	comments
			// })
			// .then(()=>console.log("Submit Successfully"))
			// .catch(()=>alert("Error in Sending Request"))
		}else{
			alert("Please Fill all fields")
		}

	}

	render(){

		return (
			<ScrollView>

				<View style={{marginHorizontal : 10,marginBottom : 20}}>
					<Text>
							What is your overall website experience?
					</Text>
					<Remarks
						valueIndex = {this.state.webExperience}
						setValueIndex = {(i)=>this.setState({webExperience : i})}
					/>

					<Text>
						Does it fulfill your requirement?
					</Text>
					<RadioForm
						radio_props={yesNo}
						initial={-1}
						// buttonColor={''}
						onPress = {(i)=>this.setState({requirementFulfill : i})}
					/>

					<Text>
						Are Student's fulfilling your criteria?
					</Text>
					<Remarks
						valueIndex = {this.state.fulfillingCriteria}
						setValueIndex = {(i)=>this.setState({fulfillingCriteria : i})}
					/>

					<Text>
						For what yo are searching ?
					</Text>
					<RadioForm
						radio_props={searchingFor}
						initial={-1}
						
						// buttonColor={''}
						onPress = {(i)=>this.setState({searchingFor : i})}
					/>

					<Text>
						Any Message for University?
					</Text>
					<TextInput
						style={{height : 60,borderColor : "black",borderWidth : 1}}
						placeholder="Highly regarded for your msg..."
						placeholderTextColor = "white"
						onChangeText={(text)=>this.setState({comments : text})}
						// value={this.state.text}
					/>	
					
					<View style={{marginTop : 10}}>
						<Button
							onPress={this.submit}
							title="Submit Feedback"
							color="#841584"
							accessibilityLabel="Login into Recruitment"
						/>		
					</View>


					<View style={{marginTop : 10}}>
						<Button
							onPress={this.submit}
							title="Submit Feedback"
							color="#841584"
							accessibilityLabel="Login into Recruitment"
						/>		
					</View>




					<View style={{marginTop : 10}}>
						<Button
							onPress={this.submit}
							title="Submit Feedback"
							color="#841584"
							accessibilityLabel="Login into Recruitment"
						/>		
					</View>
				</View>
			</ScrollView>

		  )
		}

	}
			// <div style={{letterSpacing : "1.1px"}} className="col-md-12 feedback p-0 mb-5 mt-2">
			// 	<div className="col-md-6 p-0 m-auto">

			// 		<div onClick={()=>this.setState({clickedDiv : 1})}  
			// 			className={(this.state.clickedDiv === 1 ? "orange" : "") + "   border"}>
			// 			<div className="p-3">
			// 				<p className="float-left pr-2">1.</p>
			// 				<p className="h5">What is your overall website experience?</p>
			// 				<Remarks 
			// 					value={(value)=>this.setState({webExperience : value})}
			// 					name="exp"
			// 					left="Bad"
			// 					right="Excellent"/>
			// 			</div>
			// 		</div>
		
			// 		<div onClick={()=>this.setState({clickedDiv : 2})} 
			// 			className={(this.state.clickedDiv === 2 ? "orange" : "") + "   border"}>
			// 			<div className="p-3">
			// 				<p className="float-left pr-2">2.</p>
			// 				<p className="h5"> Does it fulfill your requirement?</p>
			// 				<ul style={{listStyle:"none",margin:"0px"}}>
			// 					<li></li>
			// 					<li className="text-left">
			// 						<input onClick={()=>this.setState({requirementFulfill : "Yes"})} id="yes" type="radio"/>
			// 						<label className="pl-3" htmlFor="yes">Yes</label>
			// 					</li>
			// 					<li >
			// 						<input onClick={()=>this.setState({requirementFulfill : "No"})} id="no" type="radio"/>
			// 						<label className="pl-3" htmlFor="no">No</label>
			// 					</li>
			// 				</ul>
			// 			</div>
			// 		</div>
		
			// 		<div onClick={()=>this.setState({clickedDiv : 3})} 
			// 			className={(this.state.clickedDiv === 3 ? "orange" : "") + "  border"}>
			// 			<div className="p-3">
			// 				<p className="float-left pr-2">3.</p>
			// 				<p className="h5">Are Student's fulfilling your criteria?</p>
			// 				<Remarks
			// 					value={(value)=>this.setState({fulfillingCriteria : value})}
			// 					name="criteria"
			// 					left="minority"
			// 					right="majority"/>
			// 			</div>
			// 		</div>
		
			// 		<div onClick={()=>this.setState({clickedDiv : 4})} 
			// 			className={(this.state.clickedDiv === 4 ? "orange" : "") + "   border"}>
			// 			<div className="p-3">
			// 				<p className="float-left pr-2">4.</p>
			// 				<p className="h5"> For what yo are searching ? </p>
			// 				<ul style={{listStyle:"none",margin:"0px"}}>
			// 					<li></li>
			// 					<li className="text-left">
			// 						<input onClick={()=>this.setState({searchingFor : "Job"})}  name="job" id="job" type="radio"/>
			// 						<label className="pl-3" htmlFor="job">Job</label>
			// 					</li>
			// 					<li >
			// 						<input onClick={()=>this.setState({searchingFor : "Internship"})} name="job" id="internship" type="radio"/>
			// 						<label className="pl-3" htmlFor="internship">Internship</label>
			// 					</li>
			// 					<li >
			// 						<input onClick={()=>this.setState({searchingFor : "Other"})} name="job" id="other" type="radio"/>
			// 						<label className="pl-3" htmlFor="other">other</label>
			// 					</li>
			// 				</ul>
			// 			</div>
			// 		</div>
		
			// 		<div onClick={()=>this.setState({clickedDiv : 5})} 
			// 			className={(this.state.clickedDiv === 5 ? "orange" : "") + "  border"}>
			// 			<div className="p-3">
			// 				<p className="float-left pr-2">5.</p>
			// 				<p className="h5">Any Message for University?</p>
			// 				<textarea
			// 					onChange= {(e)=>this.setState({comments : e.target.value})}
			// 					rows="3"
			// 					style={{columnCount : 5,row:10,overflow:"visible"}} 
			// 					className="col-md-12"
			// 					placeholder="Your Comments are highly valuable"/>
			// 			</div>
			// 		</div>
			// 		<div  className="m-auto col-md-8 text-center p-4">
			// 			<input onClick={this.submit} style={{width:"100%",fontSize:"1.4em"}}  className="btn btn-primary" value="Submit Feedback" type="button"/>
			// 		</div>
	
			// 	</div>
			// </div>
		
// 	}
// }

const mapDispatch = (dispatch) => {
	return{
		insertFeeback : (feedback) => {
			dispatch({
				type : "INSERT_FEEDBACK",
				feedback
			})
		}
	}
}
const mapStateToProps = (state)=>{
	return{
		signin : state.signin
	}
}
export default connect(mapStateToProps,mapDispatch)(main)
