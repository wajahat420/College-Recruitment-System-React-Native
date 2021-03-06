import React, { Component } from 'react'
import {connect} from "react-redux"

import InfoBoxes from "./infoBox"
import IMG from "../../images/1.jpg"

import {
	Text,
	TouchableOpacity,
	View,
	TextInput,
	ScrollView,
	Button
	
} from "react-native"


 class AllBoxes extends Component {

    filterArray = (usersObj) => {
        const {signin,searchText,sortBy} = this.props
        // console.log("signin",signin)

        if(searchText !== ""){
            if(sortBy === "name"){
                return  usersObj.name.toLowerCase().includes(searchText.toLowerCase())
            }
            return usersObj.cgpa.includes(searchText)
        }
        else if(signin.as === "university"){
            // this.setState({studentSignin : false})
            return true
        }
        else if(signin.firstName.toLowerCase() === usersObj.name.toLowerCase()){
            // this.setState({studentSignin : true})
            return true
        }
        // this.setState({studentSignin : false})
        return false
        
    }

    render() {
        // console.log("inrender")
        return (
            <View >
                {
                    this.props.users.filter((obj) => this.filterArray(obj)).map((elem,index)=>{
                        return (
                                <View 
                                key={index} 
                                className={ (this.props.signin.as === "student" ? "col-md-5" : "col-md-3") +"  m-auto d-inline-block p-2"}>
                                    <InfoBoxes
                                        cgpa={elem.cgpa}
                                        img ={IMG}
                                        name={elem.name}
                                        description ={elem.description}
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
        users : state.users,
        signin : state.signin,
        sortBy : state.sortBy
    }
}
const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export  default connect(mapStateToProps,mapDispatchToProps)(AllBoxes)
