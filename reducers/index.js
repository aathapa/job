import { combineReducers } from 'redux';
import Navigation from './Navigation';
import auth from './auth.reducer';
import jobs from './jobs.reducer';
import likedJobs from './like.reducer';

export default combineReducers({
  nav: Navigation,
  auth,
  jobs,
  likedJobs
})