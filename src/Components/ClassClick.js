import React, { Component } from 'react'

class ClassClick extends Component {

clickHandler(){
    console.log('Class Button Clicked!')
}

  render() {
    return (
      <div>
        <h1>********** PART 5 - THIS CLASS IS FOR COMPONENT CLICK - ClassClick.js **********</h1>
        <button onClick={this.clickHandler}>Class Button</button>
      </div>
    )
  }
}

export default ClassClick
