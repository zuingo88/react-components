import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//  REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//  my reducers
import rootReducer from './components/MyRedux/reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);