import React, { Component } from 'react';
import { 
  View,
  Text,
  TouchableOpacity
} from 'react-native'
const FBSDK = require('react-native-fbsdk');
const {
  LoginManager,
} = FBSDK;
 
class AuthScreen extends Component {
  constructor(props) {
    super(props);
  }

  handleLogin() {
    LoginManager.logInWithReadPermissions(['public_profile'])
      .then((result)=> {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          alert('Login success with permissions: '
            + result.grantedPermissions.toString());
        }
      }
    );
  }

  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
        <TouchableOpacity onPress={()=> this.handleLogin()}>
          <Text>Login With facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AuthScreen;