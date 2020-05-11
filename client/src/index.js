import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter}from "react-router-dom"
import { createStore } from  'redux';
import { Provider } from  'react-redux';
import allReducers from "./reducers/index"
import throttle from 'lodash/throttle'
import {loadState, saveState} from './services/loadState'
const store = createStore(allReducers,loadState(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(throttle(()=>{
  saveState(store.getState())
}),
1000)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
