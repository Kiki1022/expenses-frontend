import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' //has to do w async requests
import { Provider } from 'react-redux' //need to wrap app in it so it will ahve access to store
import App from './App';


ReactDOM.render(<App />,  document.getElementById('root'))

