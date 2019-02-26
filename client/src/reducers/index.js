import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form'
import authReducers from "./authReducer";
import todoReducer from './todoReducer';
export default combineReducers({
    auth : authReducers,
    form: reduxForm,
    todos:todoReducer
});