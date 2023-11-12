import React, {Component} from "react";

class Counter extends Component{

    constructor(props)
    {
        super(props)

        this.state={
            count: 0
        }
    }

    increment()
    {
        this.setState
        (
            {
                count: this.state.count +2 
            },
            () => {
                    console.log('Callback value', this.state.count)
                }
        )
        console.log(this.state.count)
    }

    render()
    {
        return(
            <div>
                <h1> ********** PART 2 - THIS IS COUNTER.JS FOR setState METHOD ********** </h1>
                <h2>Count - {this.state.count}</h2>
                <button onClick = {() => this.increment()}>Increment</button>
            </div>
        )
    }
}
export default Counter