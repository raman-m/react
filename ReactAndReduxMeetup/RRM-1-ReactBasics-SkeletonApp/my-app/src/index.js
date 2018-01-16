import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {WorldElement, WorldElement2} from './HelloWorld';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// #1
ReactDOM.render(WorldElement, document.getElementById("container"));

// #2
ReactDOM.render(WorldElement2, document.getElementById("container2"));

registerServiceWorker();
