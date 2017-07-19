import React from 'react';
import ReactDOM from 'react-dom';
/*
ReactDOM.render(
    React.createElement("h2",null,'i am a react element'),
    document.getElementById("root")
);
*/

const color = Math.random() > 0.5 ? 'green' : 'red';

ReactDOM.render(
    <h2 style={{color:color}}>I am a react element.  I am either red or green... right now i am {color}</h2>,
    document.getElementById("root")
);
