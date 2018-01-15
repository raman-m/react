import React from 'react';
import { ReactDOM, render } from 'react-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
    <div style={styles}>
      YOUR ROOT COMPONENT
    </div>
);

render(<App />, document.getElementById('root'));
