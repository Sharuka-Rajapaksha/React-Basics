import React, {Component} from "react";

class EventBind extends Component{

 constructor(props){
    super(props)

    this.state={
        message:'Hello'
    }

   //This goes with Approach 3:
   // this.clickHandler = this.clickHandler.bind(this)
 }

 /*
 //setState = To change the state
clickHandler(){
    this.setState({
        message: 'Good Bye!'
    })
    console.log(this)
}
*/

clickHandler =() => {
    this.setState({
        message: 'Good Bye!'
    })
}




//Approach 1,2 & 3 in the below

    render(){
        return(
            <div>
                <h1>     ********** PART 6 - THIS IS FOR BINDING EVENT FUNCTION - EventBind.js **********  </h1>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/*<button onClick={() => this.clickHandler()}>Click</button>*/}
                {<button onClick={this.clickHandler}>Click</button>}
            </div>
        )        
    }
}
export default EventBind