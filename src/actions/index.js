import axios from 'axios'
import setAuthorizationToken from "../utils/setAuthorizationToken"
import jwt from 'jsonwebtoken'
import {
    SET_CURRENT_USER,
    DELETE_TENANT,
    EDIT_TENANT,
    FETCH_TENANT,
    FETCH_TENANTS,
    ADD_TENANT,
    DELETE_TENANTS,
    ADD_TADMIN,
    FETCH_TADMINS
} from './types'

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export const loginUser = (formvalues) => async dispatch => {
    const values = JSON.stringify(formvalues);
    const headers = {
        'Content-Type': 'application/json'
    };
    try {
        const response = await axios.post('api/users/login', values, {headers: headers});
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


//tenant actions

export const fetchTenants = () => async dispatch => {
    try {
        const response = await axios.get('/api/tenants/getAll');
        dispatch({type: FETCH_TENANTS, payload: response.data});
    } catch (e) {
        console.log(e.message)
    }
};

export const fetchTenant = (id) => async dispatch => {
    try {
        const response = await axios.get(`/api/tenants/findById/${id}`);
        dispatch({type: FETCH_TENANT, payload: response.data})
    } catch (e) {
        console.log(e.message)
    }
};

export const editTenant = (id, formvalues) => async dispatch => {
    const data = JSON.stringify(formvalues);
    const headers = {
        'Content-Type': 'application/json'
    };
    try {
        const response = await axios.put(`/api/tenants/edit/${id}`, data, {headers: headers});
        dispatch({type: EDIT_TENANT, payload: response.data})
    } catch (e) {
        console.log(e.message);
    }
};

export const deleteTenant = (id) => async dispatch => {
    try {
        await axios.delete(`/api/tenants/delete/${id}`);
        dispatch({type: DELETE_TENANT, payload: id})
    } catch (e) {
        console.log(e.message)
    }
};

export const addTenant = (formvalues) => async dispatch => {
    //console.log(formvalues);
    const data = JSON.stringify(formvalues);
    const headers = {
        'Content-Type': 'application/json'
    };
    try {
        const response = await axios.post('/api/tenants/add', data, {headers: headers});
        dispatch({type: ADD_TENANT, payload: response.data});
        console.log('eklendi');
    } catch (e) {
        return console.log(e.message);
    }
};

export const deleteTenants = () => async dispatch => {
    try {
        const response = await axios.delete('api/tenants/deleteAll');
        dispatch({type: DELETE_TENANTS, payload: response.data});
    } catch (e) {
        console.log(e.message)
    }
};

//tenant admin actions


export const fetchTenantAdmins = () => async dispatch => {
    try {
        const response = await axios.get('/api/tadmins/getAll');
        dispatch({type: FETCH_TADMINS, payload: response.data});
    } catch (e) {
        console.log(e.message)
    }
};

export const addTenantAdmin = (formvalues) => async dispatch => {
    //console.log(formvalues);
    const data = JSON.stringify(formvalues);
    const headers = {
        'Content-Type': 'application/json'
    };
    try {
        const response = await axios.post('/api/tadmins/add', data, {headers: headers});
        dispatch({type: ADD_TADMIN, payload: response.data});
        console.log('eklendi');
    } catch (e) {
        return console.log(e.message);
    }
};

