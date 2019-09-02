import React, { Component } from 'react'
import {connect} from "react-redux"
import RadioForm from 'react-native-simple-radio-button';


import {
	Text,
	TouchableOpacity,
	View,
	TextInput,
	ScrollView,
	Button
	
} from "react-native"

const nameANDCgpa = [
    {label : "NAME",value : "name"},
    {label :  "CGPA",value : "cgpa"}
]

class SearchBar extends Component {
    render() {
        return (
            <View className="col-md-12 m-3">
                <View className="col-md-8 m-auto">
                    <TextInput 
                        style={{borderWidth : 2,margin : 2,height : 30,paddingVertical:0}}
                        onChangeText ={(e)=> this.props.searchingText(e)}
                        placeholder="Search Students"/>
                    <View className="row ml-0">
                        <Text className="">Search by : </Text>

                        <RadioForm  
                            
                            radio_props={nameANDCgpa}
                            initial={0}
                            formHorizontal={true}

                            // buttonColor={''}
                            onPress = {(i)=>this.props.searchBy(i)}
					    />
                        {/* <View className="col-2">
                            <label style={{cursor:"pointer"}} className="col-9 p-0" htmlFor="name">NAME</label>
                            <input 
                                defaultChecked={true}
                                style={{cursor:"pointer"}}
                                className="col-3 "
                                onClick={()=>this.props.sortBy("name")}
                                id="name" name="a" type="radio"/>
                        </View>
                        <View className="col-2">
                            <label style={{cursor:"pointer"}} className="col-9  p-0" htmlFor="cgpa">CGPA</label>
                            <input 
                                style={{cursor:"pointer"}}
                                className= "col-3"
                                onClick={()=>this.props.sortBy("cgpa")}
                                id="cgpa" name="a" type="radio"/>
                        </View> */}
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{

    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        sortBy : (sortBy) =>{
            dispatch({
                type  : "SORT_BY",
                sortBy
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)
