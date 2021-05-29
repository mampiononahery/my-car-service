import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { retrieveUserFromLocalStorage, loginSuccess } from './actions/auth';


const initApp = async() => {

  const currentUser = retrieveUserFromLocalStorage();
  if (currentUser) {
    await loginSuccess()(store.dispatch, store.getState);
  }


  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

initApp();
