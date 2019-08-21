import React from 'react'
import styles from "../../css/Signin"
// import {NavLink} from "react-router-dom"
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';


function Signin(props)
     {
        return (
			<View style={styles.signin}>
				<View style={styles.main_img}>
					<View style={[styles.dott  ]}>
						<View style="col-md-4 m-auto ">
							<Text style={styles.h2} >Login Now</Text>

							<View >
								{/* <TextInput onChange={props.change}
									// style={{width:"100%"}}
									style= {styles.inputs}
									type="email" placeholder="Email@example.com"
									required={true} name="email"/> */}
								<TextInput
									style={styles.inputs}
									placeholder="Email@example.com"
									placeholderTextColor = "white"
								// inputAccessoryViewID={inputAccessoryViewID}
									onChangeText={ props.email}
										// value={this.state.text}
								/>
							</View>
							<View >
								{/* <TextInput onChange={props.change} 
									// style={{width:"100%"}}
									style= {styles.inputs}
									type="password" placeholder="Password"
									required={true} name="password"/> */}

								<TextInput
											style={styles.inputs}
											placeholder="Password"	
											placeholderTextColor = "white"										// inputAccessoryViewID={inputAccessoryViewID}
											onChangeText={ props.password}
											// value={this.state.text}
										/>
							</View>
							<View style="bottom">
								<Button
									onPress={props.Submit}
									title="Submit"
									color="#841584"
									accessibilityLabel="Login into Recruitment"
								/>
							</View>
							<View><Text style={styles.span} >Forgot Password?   <Text style={styles.anker} to="/Register">Register</Text> </Text></View>
						</View>
					</View>
				</View>
			</View>
        )
    }
export default Signin

