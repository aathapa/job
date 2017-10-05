import { FETCH_JOBS } from '../constant/';

const INITIAL_STATE = {
  result: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
    case FETCH_JOBS:
      return action.payload;  
  }
}