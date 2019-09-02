import React, { Component } from 'react'
// import AllBoxes from "./AllBoxes"
import UploadStudentData from "./uploadStudentData"
import SearchBar from "./searchBar"
import {connect} from "react-redux"

import {
	Text,
	TouchableOpacity,
	View,
	TextInput,
	ScrollView,
	Button
	
} from "react-native"
class Main extends Component {

    state = {
        searchText : "",
        searchBy : "name"
    }
   
    render() {
        // console.warn("text",this.state.searchBy)
        return (
            <View>
                <View style={(this.props.signin.as === "student" || this.props.signin === "") ? "":""}>
                    <SearchBar 
                        searchingText = {(value)=> this.setState({searchText : value})}
                        searchBy = {(v)=>this.setState({searchBy : v})}
                    />
                </View>
                <View style={(this.props.signin.as !== "student" || this.props.signin === "") ? "":""}>
                    <UploadStudentData/>
                </View>
                {/* <View>
                    <AllBoxes searchText = {this.state.searchText}/>
                </View> */}
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        signin : state.signin
    }
}


export default connect(mapStateToProps)(Main)
