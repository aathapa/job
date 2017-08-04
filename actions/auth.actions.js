import { FACEBOOK_LOGIN_SUCCESS } from '../constant';
import {
  AsyncStorage
} from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';

export const facebooklogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');

  if (token) {
    // Dispatch an action saying FB login is done
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    // Start up FB Login process
    doFacebookLogin(dispatch);
  }
};
const doFacebookLogin = async (dispatch) => {
  let result = await LoginManager.logInWithReadPermissions(['public_profile'])
  if (result.isCancelled) {
    alert('Login Cancel')
  }
  else {
    let token = await AccessToken.getCurrentAccessToken();
    AsyncStorage.setItem('fb_token', token.accessToken.toString());
    dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token})
  }
}

