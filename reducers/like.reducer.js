import { LIKE_JOB,CLEAR_JOB } from '../constant';
import _ from 'lodash'

export default (state=[], action) => {
  switch (action.type) {
    case CLEAR_JOB: 
      return []  
    case LIKE_JOB: 
      return _.uniqBy([
        action.payload, ...state
      ], 'jobkey')  
    default:
      return state  
  }
}