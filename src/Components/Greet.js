import React from 'react'

//TERM 1 - DEFAULT WAY 
/*
function Greet(){
    return <h2>Lesson 1 - Greetings</h2>
}
export default Greet
*/

//TERM 2 - NAMED EXPORT
//export const Greet = () => <h2>This is my React Lesson 2</h2> 
//Same result as TERM 1 

//Props - Properties
const Greet = (props) => {

    console.log(props)
    return(
        <div>
            <h1>
                This is Main Prop: {props.name} is {props.name2} 
            </h1> 
            <h2>
                {props.children}
            </h2>
        </div>  
    )
}

export default Greet