import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import {createLogger} from "redux-logger/src";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import {setCurrentUser} from "./actions";
import jwt from 'jsonwebtoken'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger({predicate: (getState, action) => !action.type.includes('@@redux-form')});

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk, logger)));
// store.subscribe(() => {
//     console.log('Store Changed', store.getState())
// });
window.store=store;
if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
