import { combineReducers } from 'redux';
import Navigation from './Navigation';
import authReducer from './auth.reducers';

export default combineReducers({
  nav: Navigation,
  auth: authReducer
})