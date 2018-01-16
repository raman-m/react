import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WorldElement from './HelloWorld';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(WorldElement, document.getElementById("container"));

registerServiceWorker();
