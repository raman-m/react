import React from 'react';
import ReactDOM from 'react-dom';

// ---------------------------------------------------------
// -- Rendering a list of JSX expressions
// --
var data = ["item1","item2","item3","item4","item5"];

var jsxList =
    <ul>
        {data.map((elem) => <li>{elem}</li>)}
    </ul>

// #3 : Go to index.js
//ReactDOM.render(jsxList, document.getElementById("jsxContainer"));
export default jsxList;
