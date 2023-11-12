import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import {Greet} from './Components/Greet' /*Components = Folder name AND Greet = .js is file name*/ // Can import a JS file like this only with TERM 2
import Greet from './Components/Greet' // Can import a JS file like this only  with TERM 1
import Hello from './Components/Hello'
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';
import Greet2 from './Components/Greet2';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';


class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>THIS IS APP.JS FILE</h1>
          <button><h2>Click me!</h2></button>
          <Hello/>
          
          <Greet name='Bruce' name2='Batman'>
            <p>This is the Child class of First Prop</p>
          </Greet>

          <Greet name='Clark' name2='Superman'>
            <button >This is the child of Second Prop</button>
          </Greet>
          
          <Greet name='Diana' name2='Wonderwoman'/>
      
        <Welcome name3="Bruce" name4="Batman" name5='Batman'/>
        <Welcome name3="Clark" name4="Superman" name5='Superman'/>
        <Welcome name3="Diana" name4="Wonder Woman" name5='Wonder Woman'/>

        <Message/>
        <Counter/>
        <Greet2/>
        <FunctionClick/>
        <ClassClick/>
        <EventBind/>
        <ParentComponent/>
      </div>
    );
  }
}
export default App;

// <Greet/> - If there is nothing in between the tag can easily used the "Self-Closing tag"