import React from "react";
import ReactDOM from "react-dom"

var WorldElement = React.createElement(
    "h1",
    {id: "id_001", className: "main_title"},
    "Hello World!"
);

// #1 : Go to index.js
//ReactDOM.render(WorldElement, document.getElementById("container"));
//export default WorldElement;

// ------------------------------------------------------------------
var elem1 = React.createElement(
    "h1",
    {id:"id001", className:"my_title"},
    "Hi World!"
);

var elem2 = React.createElement(
    "div",
    {id:"id002", className:"my_description..."},
    "Some description..."
);

// #2 : Go to index.js
var WorldElement2 = React.createElement("div", null, elem1, elem2);

export { WorldElement, WorldElement2 };

//ReactDOM.render(root, document.getElementById("container"));
