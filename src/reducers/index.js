import {combineReducers} from 'redux'
import addReducer from './addReducer'
import {reducer as formReducer} from 'redux-form'

export default  combineReducers({
  form: formReducer
})