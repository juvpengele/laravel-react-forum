import { combineReducers } from 'redux';

//Reducers
import authReducer from './AuthReducer';
import FlashReducer from './FlashReducer';
import CategoriesReducer from './CategoriesReducer';

export default combineReducers({
    auth: authReducer,
    flash: FlashReducer,
    categories: CategoriesReducer
});
