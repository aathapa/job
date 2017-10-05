import React, { Component } from 'react';
import { 
  View,
  Text
} from 'react-native'
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../../actions';
 
class SettingScreen extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{marginTop: 20}}>
        <Button
          title="Remove Liked Jobs"
          backgroundColor="#e74c3c"
          style={{ height: 100, marginHorizontal: 15, }}
          onPress={() => this.props.clearJob()}
        /> 
      </View>
      
    );
  }
}

export default connect(null,actions) (SettingScreen)