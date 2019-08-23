import React,{Fragment} from 'react'
// import "./navbar.css"
// import {NavLink} from "react-router-dom"
// import {connect} from "react-redux"
import {Text} from "react-native"

import Signin from "../Signin/Signin"
import NewsFeeds from "../News-Feeds/News-feeds"

import { Container, Header, Content, Tab, Tabs } from 'native-base';

const Tab1 = () => {
    return(
        <Text>
            Navbar
        </Text>
    )
}
const Tab2 = () => {
    return(
        <Text>
            a
        </Text>
    )
}


 class Navbar extends React.Component {
    render(){

            return (
           
                <Container>
                    <Header style={{padding : 1,margin : 0,height : 7}} hasTabs />
                    <Tabs  
                        tabContainerStyle={{}}>
                        <Tab textStyle = {{color : "rgb(206, 206, 206)"}} heading="Home">
                            <NewsFeeds />
                        </Tab>
                        <Tab textStyle={{textAlign : "center",color : "rgb(206, 206, 206)"}}    heading="Studentd's Data">
                            <Tab2 />
                        </Tab>
                        <Tab textStyle = {{color : "rgb(206, 206, 206)"}} heading="Feedbacks">
                            <Tab2 />
                        </Tab>
                        <Tab textStyle = {{color : "rgb(206, 206, 206)"}} heading="Login">
                            <Signin  />
                        </Tab>
                    </Tabs>
                </Container>
            )
    }
}

// const mapState = (state) =>{
//     return{
//         signin :  state.signin
//     }
// }

export default Navbar