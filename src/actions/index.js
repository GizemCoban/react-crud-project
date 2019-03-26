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
    try {
        const response = await axios({
            method: 'post',
            url: '/api/v1/auth/login',
            params: {
                username: formvalues.username,
                password: formvalues.password
            }
        });
        //dispatch({type: LOGIN_USER, payload: response});
        const token = response.data;
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
