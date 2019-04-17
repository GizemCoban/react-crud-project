import _ from 'lodash'
import {
    FETCH_TENANTS,
    FETCH_TENANT,
    EDIT_TENANT,
    DELETE_TENANT,
    ADD_TENANT
} from '../actions/types'

export default (state={}, action)=>{
    switch (action.type) {
        case FETCH_TENANTS:
            return{...state, ..._.mapKeys(action.payload, '_id')};
        case ADD_TENANT:
            return{...state, [action.payload._id]: action.payload};
        default:
            return state;
    }

}