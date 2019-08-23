import React, { Component } from 'react'
// import "../../../css/Posts.css"
import {connect} from "react-redux";
// import axios from 'axios';
import {Text,View,Button,TextInput,Image,FileReader,StyleSheet} from "react-native"
import ImagePicker from 'react-native-image-picker';
// import { connect } from 'tls';

const options = {
    title: 'Select Image',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };



class Posts extends Component {

    // constructor(){
    //     super()
    //     axios.get("/fetchAllPosts")
    //     .then(res=>{
    //         this.props.postAllPosts(res.data)
    //     })
    //     .catch(err=>alert("error "+err))
    // }


    // More info on all the options is below in the API Reference... just some common use cases shown here
    
  
  /**
   * The first arg is the options object for customization (it can also be null or omitted for default options),
   * The second arg is the callback which sends object: response (more info in the API Reference)
   */
  image = () => {

    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri };
      
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      
          this.setState({
            imageURL: source,
          });
        }
      });
  }


    state = {
        text : "",
        imageURL : "",
        loading : false,
        showImg : false
    }


    post = () => {
        const{text,imageURL} = this.state
        // const {signin} = this.props
        // console.log("state",this.state)
        if(text ||   imageURL){
            this.props.postInput(text,imageURL)
            this.setState({text: "",imageURL : ""})
            // axios.post("/uploadPost",{
            //     fullName : signin.firstName + " " + signin.lastName,
            //     text,
            //     imageURL
            // })
            // .then(()=>{
            //     console.log("inside then")
            //     this.props.postInput(text,imageURL)
            //     this.setState({showImg : false,text:"",imageURL : ""})
            // })
            // .catch(err=>alert("error " + err))
        }else{
            alert("Write Anything Please")
        }
    }

    render() {

        return (
            // <Text>Working   </Text>
                <View style={styles.main}>
                    <Text className="create-post m-auto col-sm-10 col-md-7 ">Create Post</Text>
                    
                    <View style={styles.border}>

                        <View className="  col-sm-10 col-md-7 m-auto p-0">
                            
                            <TextInput
                                style={styles.comment
                                }
                                placeholder="What's in your mind?"	
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                            />
                            
                        </View>
                        
                        <View>
                            {this.state.imageURL !== "" && <Image
                                style={{width: 50, height: 50}}
                                source={this.state.imageURL}
                            />}
                        </View>
                        <View style={{display : "flex",flexDirection:"row"}}>
                            <View style={{flex : 2}}>
                                <Text style={{marginLeft : 5,marginTop :4}} onPress={this.image} htmlFor="photo" className="p-2 m-0">
                                    Image
                                </Text>
                            </View>
                            <View style={{flex :1,width : 30}}>
                                <Button
                                    style={styles.button}
                                    onPress = {this.post}
                                    disabled = {this.state.loading}
                                    title="Post"
                                    color="#841584"
                                    accessibilityLabel="Login into Recruitment"
                                />
                            </View>
                        </View>
                    </View>
                </View>

        )
    }
}

const styles  = StyleSheet.create({
    main :  {
       margin : 7
    },
    border : {
        borderWidth : 2,
        borderColor : "gray",
        borderRadius : 3,
    },
    comment : {
        // borderTopWidth : 2,
        borderBottomWidth : 2,
        borderColor :"grey",
        height : 60
    },
    button :  {
        width : 10
    }
})

const mapStateToProps = (state) => {
    return {
        userLogin : state.userLogin,
        signin : state.signin
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        postInput : (text ,URL)  => {
            dispatch({
                type : "INSERT_POST",
                postText : text ,
                imageURL : URL,
            }) 
        },
        postAllPosts : (posts) =>{
            dispatch({
                type : "ALL_POSTS",
                allPosts : posts
            })
        }
    }
}
  



export default connect(mapStateToProps,mapDispatchToProps) (Posts);
