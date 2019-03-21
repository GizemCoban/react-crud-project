import axios from 'axios'
import {LOGIN_USER} from './types'

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
        dispatch({type: LOGIN_USER, payload: response})
        return response;
    } catch (err) {
        return err.response;
    }
};

