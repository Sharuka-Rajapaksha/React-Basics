import React from "react";

const Hello =  () => {
   /* return(
        <div className = 'dummyClass '>
            <h1>Lesson 2 - JSF function </h1>
        </div>
    )*/
    //CreateElement method can accept any number of element  s as children
    return React.createElement('div',
    null, /* {id: 'hello', className: 'dummmyyClass'}*/
    React.createElement('h3', null, 'This is Create Element Function'))
}
export default Hello