import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store'
import { ConnectedCounter } from './Counter'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <Provider store={store}>
    <div style={styles}>
      <ConnectedCounter />
    </div>
  </Provider>
);

render(<App />, document.getElementById('root'));
