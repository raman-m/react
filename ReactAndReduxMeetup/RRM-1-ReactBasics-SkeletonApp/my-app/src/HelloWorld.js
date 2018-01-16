import React from "react";
import ReactDOM from "react-dom"

var WorldElement = React.createElement(
    "h1",
    {id: "id_001", className: "main_title"},
    "Hello World!"
);

// Go to index.js
//ReactDOM.render(WorldElement, document.getElementById("container"));

export default WorldElement;