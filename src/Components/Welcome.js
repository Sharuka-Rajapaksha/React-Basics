import React, {Component} from "react";

//This is Class Component
// Here it build a Props as a component and called it in the Main File.

class Welcome extends Component{
    render(){
        return <h2> This is from Class Component: {this.props.name3} known as {this.props.name4} <button>{this.props.name5}</button> </h2> 
    }
}
export default Welcome

