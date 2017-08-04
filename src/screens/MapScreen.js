import React, { Component } from 'react';
import { 
  View,
  Text
} from 'react-native'
import MapView from 'react-native-maps';
 
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

  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          onRegionChange={(region)=> this.onRegionChangeComplete(region) }
        />
      </View>
    );
  }
}
 
export default MapScreen;