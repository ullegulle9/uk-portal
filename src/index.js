import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { browserHistory } from 'react-router';
import App from './App';
// import Routes from './Router/routes';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import registerReducer from './Reducers/RegisterReducer';
import UserReducer from './Reducers/UserReducer';
// let initialStore = {
//   userObj: null,
  
// }

const reducers = combineReducers({
  register: registerReducer,
  user: UserReducer
})

const store = createStore(
  reducers // /* preloadedState, */
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store} ><App /></Provider>,
  document.getElementById('root'));
registerServiceWorker();
