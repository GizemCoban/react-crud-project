import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import {createLogger} from "redux-logger/src";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk, createLogger())));
// store.subscribe(() => {
//     console.log('Store Changed', store.getState())
// });
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
