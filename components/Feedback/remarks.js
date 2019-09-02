import React from 'react'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {View,Text} from "react-native"
var radio_props = [
	{value: 0 },	
	{value: 1 },
	{value: 2 },
	{value: 3 },
	{value: 4 },
	{value: 5 },
	{value: 6 },
	{value: 7 },
	{value: 8 },
	{value: 9 }
  ];
export default function remarks(props) {
	return (
		<View>
				<View style={{flexDirection  : "row"}}>
						<Text style={{flex : 1,textAlign : "center"}}>1</Text>
						<Text style={{flex : 1,textAlign : "center"}}>2</Text>
						<Text style={{flex : 1,textAlign : "center"}}>3</Text>
						<Text style={{flex : 1,textAlign : "center"}}>4</Text>
						<Text style={{flex : 1,textAlign : "center"}}>5</Text>
						<Text style={{flex : 1,textAlign : "center"}}>6</Text>
						<Text style={{flex : 1,textAlign : "center"}}>7</Text>
						<Text style={{flex : 1,textAlign : "center"}}>8</Text>
						<Text style={{flex : 1,textAlign : "center"}}>9</Text>
						<Text style={{flex : 1,textAlign : "center"}}>10</Text>
					</View>
					<RadioForm
						  formHorizontal={true}
						  animation={false}	
						  
						//   buttonColor={'#50C900'}					  
						  >

							{
							radio_props.map((obj,i)=>{
								// console.warn("h")
								return(

									<RadioButton
										key = {i}
										
									//  buttonWrapStyle={}
									 >

										<RadioButtonInput
											obj={obj}
											index={i}
											isSelected={props.valueIndex === i}
											onPress={(i)=>props.setValueIndex(i)}
											borderWidth={1}
											// buttonInnerColor={'#50C900'}
											buttonOuterColor={props.valueIndex === i ? '#2196f3' : '#000'}
											buttonSize={13}
											buttonOuterSize={20}
											
											buttonWrapStyle={{margin : 8.2}}
										/>
									
									</RadioButton>
								)
							})
						}
				</RadioForm>
			</View>
	)
}
