import React from 'react'
import {View,Text,StyleSheet} from "react-native"

export default function allFeedbacks(props) {
		return (
			<View style={{display : "flex"}}>
				<Text style={styles.email}>{props.email}</Text>

				<View style={{borderWidth : 1,borderColor : "gray",marginHorizontal : 3,padding  :1}}>
					<View style={{display : "flex",flexDirection : "row"}}>
						<Text style={styles.items}>Web Experience</Text>
						<Text style={styles.items}>===></Text>
						<Text style={styles.items}>{props.web}</Text>
					</View>
					<View style={{display : "flex",flexDirection : "row"}}>
						<Text style={styles.items}>Requirement Fulfilled</Text>
						<Text style={styles.items}>===></Text>
						<Text style={styles.items}>{props.req}</Text>					
					</View>
					<View style={{display : "flex",flexDirection : "row"}}>				
						<Text style={styles.items}>Criteria Fulfilled</Text>
						<Text style={styles.items}>===></Text>
						<Text style={styles.items}>{props.criteria}</Text>					
					</View>
					<View style={{display : "flex",flexDirection : "row"}}>
						<Text style={styles.items}>Searched For</Text>
						<Text style={styles.items}>===></Text>
						<Text style={styles.items}>{props.searched}</Text>					
					</View>
					<View style={props.comments === "" && {display : "none"}  }>
						<Text style={{textAlign : "center",	color : "brown"}}>Review : </Text>
						<Text style={ styles.comments}>{props.comments}</Text>					
					</View>
					
				</View>
			</View>
				)
			}
			
		
const styles =   StyleSheet.create({
	items : {
		flex: 1,
		textAlign : "center",
		fontSize : 12,
		marginBottom:  4
	},
	email : {
		textAlign : "center",
		fontSize : 17,
		color : "brown",
		fontWeight : "800",
		marginBottom : 5,
		textDecorationLine : "underline",
		textDecorationColor : "blue"
	},
	comments : {
		textAlign : "center",
		marginHorizontal : 5,
		marginTop : 2,
		fontSize : 12
	}
})
	