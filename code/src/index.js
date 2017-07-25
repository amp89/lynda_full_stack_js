import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/App"

import data from './testData'

/*
ReactDOM.render(
    React.createElement("h2",null,'i am a react element'),
    document.getElementById("root")
);
*/

console.log(data);


ReactDOM.render(
    <App headerMessage="Hello Property..jhgkjg.." contests={data.contests}/>,
    document.getElementById("root")
);




/*
setTimeout(()=>{
    ReactDOM.render(
        <h2>BYE</h2>,
        document.getElementById("root")
    )
},2000)
*/
