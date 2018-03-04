import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import {createStore} from 'redux';
import reducer from './reducers/reducer';
import {Provider} from 'react-redux';
import launch from 'launch.json';
import package from 'package.json';

let store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));
