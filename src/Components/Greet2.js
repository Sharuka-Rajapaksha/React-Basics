import React from 'react'

//In this Class we are Destructuring Props & State

//Props - Properties
const Greet2 = props => {
    const{name, name2} = props
    return(
        //name2 and name is not called in the UI.
        <div>
            <h1> ********** PART 3 - THIS IS DESTRUCTURING CLASS - Greet2.js ********** </h1>
            <h1>
                This Person called:  {name2} is {name} 
            </h1> 
        </div>  
    )
}
export default Greet2