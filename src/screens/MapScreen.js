import React, { Component } from 'react';
import { 
  View,
  Text
} from 'react-native'
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import { Button } from 'react-native-elements';
 
class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37,
        longitude: -122,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    }
  }

  onRegionChangeComplete(region){
    this.setState({ region });
  }

  onSearchPress = ()=> {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate('Tabs'); 
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          onRegionChange={(region)=> this.onRegionChangeComplete(region) }
        />
        <View style={{position: 'absolute', bottom: 20,left :0,right: 0}}>
          <Button  
            large  
            title="Search This area"
            icon={{ name: 'search' }}
            backgroundColor='#27ae60'
            onPress={this.onSearchPress}
          />
        </View>
      </View>
    );
  }
}

 
export default connect(null, actions) (MapScreen);