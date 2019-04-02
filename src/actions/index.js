import axios from 'axios'
import {SET_CURRENT_USER} from './types'
import setAuthorizationToken from "../utils/setAuthorizationToken"
import jwt from 'jsonwebtoken'

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export const loginUser = (formvalues) => async dispatch => {
    const values=JSON.stringify(formvalues);
    const headers = {
        'Content-Type': 'application/json'
    };
    try {
        const response = await axios.post('api/users/login', values, {headers:headers});
        //dispatch({type: LOGIN_USER, payload: response});
        const token = response.data.token;
        console.log(jwt.decode(token));
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwt.decode(token)));
        return response;
    } catch (err) {
        return err.response;
    }
};

export function logout() {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    }
}
