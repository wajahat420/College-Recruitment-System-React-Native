import React, {Fragment ,Component } from 'react'
import InputPosts from  "./Posts/InputPost"
import AllPosts from  "./Posts/AllPosts"
// import SideBar from "./Sidebar/sideBar"
// import MsgBoxTitle from "./Msg/MsgBoxTitle"
// import 
// import {Text} from "react-native"

// import "../../css/sidebar.css"
import {
    ScrollView
} from "react-native"

class News_feeds extends Component {
    render() {
        return (
            <ScrollView>
                {/* <Text>Hello</Text> */}
                <InputPosts />
                <AllPosts/>
                {/* <MsgBoxTitle/>
                <SideBar/> */}
            </ScrollView>  

        )
    }
}
export default News_feeds
