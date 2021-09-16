import loginStatusReducer from './loginStatusReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    loginStatusReducer: loginStatusReducer,
})

export default allReducers;