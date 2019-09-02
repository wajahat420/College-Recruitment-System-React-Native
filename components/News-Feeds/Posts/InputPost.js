import React, { Component } from 'react'
// import "../../../css/Posts.css"
import {connect} from "react-redux";
// import axios from 'axios';
import {Text,View,TextInput,Image,TouchableOpacity,StyleSheet} from "react-native"
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select Image',
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
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
          alert('User cancelled image picker');
        } else if (response.error) {
          alert('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          alert('User tapped custom button: ', response.customButton);
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

                        <View>
                            
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
                                style={{width: 80, height: 70,marginLeft : 6}}
                                source={this.state.imageURL}
                            />}
                        </View>
                        <View style={styles.bottom}>
                            <View style={{flex : 3}}>
                                <Text style={{marginLeft : 5,marginTop :4}} onPress={this.image}>
                                    Image
                                </Text>
                            </View>
                            <TouchableOpacity style={{flex : 1}}   onPress={this.post}>
                                <Text style={styles.button}>Post</Text>
                            </TouchableOpacity>
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
        height : 60
    },
    button :  {
        color :"white",
        padding : 4,
        borderRadius : 2,
        textAlign :"center",
        backgroundColor :"blue"
    },
    bottom : {
        display : "flex",
        flexDirection:"row",
        borderTopColor: "gray",
        borderTopWidth : 2
        
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
