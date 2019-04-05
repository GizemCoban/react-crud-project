import axios from 'axios'
import setAuthorizationToken from "../utils/setAuthorizationToken"
import jwt from 'jsonwebtoken'
import {
    SET_CURRENT_USER,
    DELETE_TENANT,
    EDIT_TENANT,
    FETCH_TENANT,
    FETCH_TENANTS
} from './types'

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

export const fetchTenants = () => async dispatch =>{
    const response = await axios.get('/api/tenants/getAll');
    dispatch({type: FETCH_TENANTS, payload:response.data})
};