import { FACEBOOK_LOGIN_SUCCESS } from '../constant';

export default authReducers = (state = {},action) => {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      return {
        token: action.payload
      }  
    default: 
      return state  
  }
} 