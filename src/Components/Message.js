import React,{ Component } from "react";

class Message extends Component{

    constructor(){
        super()
            this.state = {
                message: 'Welcome Visitor'
        }
    }

changeMessage(){
    this.setState({
        message: 'Thank you for subscribing!'
    } 
    )
}

render(){
        return (
            <div>
                <h1> ********** PART 1 - THIS IS MESSAGE.JS FOR state METHOD ********** </h1>
                <h2>{this.state.message}</h2>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>

        )
    }
}
export default Message