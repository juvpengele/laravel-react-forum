import { combineReducers } from 'redux';

//Reducers
import authReducer from './AuthReducer';
import FlashReducer from './FlashReducer';

export default combineReducers({
    auth: authReducer,
    flash: FlashReducer
});