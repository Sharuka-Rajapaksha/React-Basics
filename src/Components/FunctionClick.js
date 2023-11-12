import React from 'react'
//This is Functional Class
function FunctionClick() {

function clickHandler(){
    console.log('Button Clicked Successfully!')
}

    return (  
    <div>
        <h1> ********** PART 4 - THIS CLASS IS FOR FUNCTION CLICK - FunctionClick.js **********</h1>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
