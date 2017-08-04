import React, { Component } from 'react';
import { 
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { LoginManager } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { facebooklogin } from '../../actions';
 
class AuthScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.auth.token) {
      this.props.navigation.navigate('MapScreen')
    }
  }

  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
        <TouchableOpacity>
          <Text>Login With facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    facebookLogin: () => facebooklogin()
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);