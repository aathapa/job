import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
import MapView from 'react-native-maps';

class ReviewScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Review",
    headerRight: 
    <TouchableOpacity style={{marginRight: 15}} onPress={() => navigation.navigate('Setting')}>
        <Text>Settings</Text>
      </TouchableOpacity>
  })

  renderLikeJobs() {
    return this.props.likedJobs.map(job => {
      const { company, formattedRelativeTime,
        url, jobtitle, latitude, longitude,jobkey } = job;
      const initialRegion = {
        latitude,
        longitude,
        longitudeDelta: 0.02,
        latitudeDelta: 0.045
      }
      return (
        <Card title={jobtitle} key={jobkey}>
          <View style={{ height: 200 }}>
            <MapView
              style={{ flex: 1 }}
              cacheEnabled={Platform.OS === 'android'}
              scrollEnabled={false}
              initialRegion={initialRegion}
            />
            <View style={{flexDirection: 'row',justifyContent: 'space-around',marginBottom: 10,marginTop: 10}}>
              <Text style={{ fontStyle: 'italic'}}>{company}</Text>
              <Text style={{ fontStyle: 'italic' }}>{formattedRelativeTime}</Text>
            </View>
            <Button
              title="Apply Now"
              backgroundColor="#27ae60"
              onPress={()=> Linking.openURL(url)}
            />
          </View>
        </Card>
      );
    })
  }

  render() {
    return (
      <ScrollView>
        {this.renderLikeJobs()}
      </ScrollView>
    );
  }
}

mapStateToProps = (state) => {
  return {
    likedJobs: state.likedJobs
  }
}

export default connect(mapStateToProps) (ReviewScreen);