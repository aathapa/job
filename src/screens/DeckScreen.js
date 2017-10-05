import React, { Component } from 'react';
import {
  View,
  Text,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import { Card,Button,Icon } from 'react-native-elements';
import Swipe from '../components/Swipe';
import * as actions from '../../actions/';

class DeckScreen extends Component {
  constructor(props) {
    super(props);
  }

  renderCard(job) {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };
    return (
      <Card title={job.jobtitle}>
        <View style={{height: 300}}> 
          <MapView
            style={{ flex: 1 }}
            initialRegion={initialRegion}
            scrollEnabled={false}
          />
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 10
        }}>  
          <Text>{job.company}</Text>  
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>
          {job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}
        </Text>
      </Card>
    );
  }

  renderNoMoreCards =() => {
    return (
      <Card title="No More cards">

      </Card>
    );
  }

  render() {
    return (
      <View>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          keyProp="jobkey"
          onSwipeRight={(job) => this.props.likedJobs(job)}
        />
      </View>
    );
  }
}

mapStateToProps = ({ jobs }) => {
  return {
    jobs: jobs.results
  }  
}

export default connect (mapStateToProps,actions) (DeckScreen);