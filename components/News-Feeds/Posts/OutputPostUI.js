import React, {Fragment ,Component } from 'react'
import { connect } from 'react-redux';
// import img from  "../../../images/1.jpg"
import {
    Text,
    Image,
    StyleSheet,
    View
} from "react-native"

class OutputPosts extends Component {
    render() {
        // let signinAs = this.props.signin.as
        return (
            // <div className={(signinAs === "student"?"col-md-12":"col-9")+" float-left clearfix x m-0 pt-4 pb-4"}>
            //     <div className={(signinAs === "student" ? "col-md-6":"col-md-7")+" m-auto p-0"}>
            //         <h4 className="">{this.props.name}</h4>
            //         <div className="pb-2" style={{fontWeight : "600",color:"blue"}}>{this.props.postText}</div>
            //         <img className={(this.props.imageURL === "" ? "d-none":"")+" border"}
            //             width="100%" height="270px"
            //             src={this.props.imageURL} alt="not found">    
            //         </img>
            //         <div className="row  post-bottom text-center m-0 p-1">
            //             <div  onClick={this.props.like} 
            //                 className={(this.props.getLikeFromDb ? "blue":"")+" col-4 p-1"}>
            //                     Like
            //             </div>
            //             <div className="col-4 p-1">Comment</div>
            //             <div className="col-4 p-1">Share</div>
            //         </div>
            //     </div>
            // </div>
            <View style={styles.main}>
                <Text style={{marginTop : 4}}>Username</Text>
                {this.props.text === "" ? null : <Text
                    style={{
                        marginTop : 2,
                        marginBottom :2,
                        color : "blue"
                    }}
                >{this.props.text}</Text>}
                {this.props.img === "" ? null : <Image
                    style={{width: 200, height: 100,marginTop : 2,marginBottom : 2}}
                    source={this.props.img}
                />}
                <View style={styles.container}>
                    <Text style={styles.elem} >Like</Text>
                    <Text style={styles.elem}>Comment</Text>
                    <Text style={styles.elem}>Share</Text>
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    main : {
        margin : 5
    },
    container : {
        borderWidth : 2,
        borderColor : "gray",
        marginTop : 2,
        padding : 2,
        display : "flex",
        flexDirection : "row"
    },
    elem : {
        textAlign : "center",
        flex : 2
    }
})

const mapState = (state) =>{
    return{
        signin : state.signin,
    }
}
export default connect(mapState)(OutputPosts)
