import React, { Component } from 'react'
import SigninUI from "./Signin-UI.js"
import {View} from "react-native"
// import axios from "axios"
// import {Redirect} from "react-router-dom"
// import {connect} from "react-redux"

 class Signin extends Component {
    state = {
        signin : {
            email,
            password,
            as : "university"
        },
        email : "",
        password : "",
        redirect : false
    }
    Submit = (e) => {
        // console.log("woolllw")
        // e.preventDefault()
        const {email,password} = this.state
        if(email && password){
            alert("Details Complete")
            this.props.setSignin(this.state.signin)

            // axios.post("/login",{
            //     email,
            //     password
            // })
            // .then(res=>{
            //     console.log("res",res.data)
            //     if(res.data.valid){
            //         this.props.setSignin(res.data.user)
            //         this.setState({redirect : true})
            //     }
            //     else{
            //         alert("Invalid Signin")
            //     }
            // })
        }
        else{
            alert("Fill All Details")
        }
    }
   
    render() {
        // if(this.state.redirect){
        //     return <Redirect to="/News_Feeds" />
        // }
        // console.warn(this.state.email)
        return (
            <View>
                {/* <Text>Hello</Text> */}
                <SigninUI 
                    email={(email)=>this.setState({email})} 
                    password={(password)=>this.setState({password})} 
                    Submit={this.Submit}
                />
            </View>
        )
    }
}
const mapState = (state) =>{
    return{

    }
}
const mapDispatch = (dispatch) =>{
   return{
        setSignin : (signin)=>{
            dispatch({
                type : "SIGNIN",
                signin
            })
        }
   }
}
// export default Signin.
export default connect(mapState,mapDispatch)(Signin)
