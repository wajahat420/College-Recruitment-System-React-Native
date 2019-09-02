import React, { Component } from 'react'
// import "../../css/uploadStudentData.css"

import {
	Text,
	TouchableOpacity,
	View,
	TextInput,
	ScrollView,
    Button,
    StyleSheet
	
} from "react-native"

import ImagePicker from 'react-native-image-picker';


export default class uploadStudentData extends Component {
    state={
        marksheet :"",
        marksheetName : "",
        cv: "",
        cvName : "",
        cgpa : "",
        image : {"uri" : ""},
        uploaded : ""
    }

    image = () => {

        const options = {
            title: 'Select Image',
            // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
              skipBackup: true, 
              path: 'images',
            },
          };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              alert('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              alert('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                image: source,
              });
            }
          });
    }

    Submit = () => {
        const {cv,marksheet,name,cgpa,image} = this.state
        if(cv && marksheet && name && cgpa && image){
            console.log("All True")
        }
    }
    file = (event) =>  {
        // console.log("working",event.target.name)
        const name = event.target.name
        const input = event.target;
        const fileName = event.target.files[0].name

        const reader = new FileReader();
        reader.onload = () => {

            const dataURL = reader.result;
            // console.log(dataURL)
            if(name==="marksheet"){
                this.setState({marksheet : dataURL,marksheetName : fileName})
            }else if(name === "cv"){
                this.setState({cv : dataURL,cvName : fileName})
            }else{
                this.setState({image : dataURL,uploaded : "Uploaded"})
            }


        }
        reader.readAsDataURL(input.files[0]);

        reader.onloadstart = () => {
            console.log("load start")
        }
        reader.onloadend = () => {      
            console.log("load end")
        } 

    }

    
    render() {
        // console.warn("state",this.state.image)
        return (

            <View style={{margin : 9,borderWidth : 1.2,borderColor : "blue",padding : 4,paddingVertical : 10}}>
                <View style={styles.container}>
                    <Text style={styles.left}>Name</Text>
                    <TextInput
                        style={[styles.input,styles.right]}
                        onChangeText ={(e)=> this.props.searchingText(e)}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.left}>Upload CV</Text>
                    <Text style={styles.right}>{this.state.image["uri"]}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.left}>Upload Marksheet</Text>
                    <Text style={styles.right}>{this.state.image["uri"]}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.left} onPress={this.image}>Upload Image</Text>
                    <Text style={styles.right}>{this.state.image["uri"]}</Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container : {
        display : "flex",
        flexDirection : "row"
    },
    left : {
        fontWeight : "700" ,
        marginTop : 6 , 
        flex : 1
    },
    input:  {
        height : 22,
        borderWidth : 1,
        paddingVertical : 0,
        paddingHorizontal : 1.8
    },
    right : {
        flex:  2
    }
})