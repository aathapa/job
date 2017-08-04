import React, { Component } from 'react';
import {
  ScrollView,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import Slides from '../components/Slides';

const SLIDES_DATA = [
  { id: 1, text: "Welcome to Job Finder App", color: '#9C27B0' },
  { id: 2, text: "We let you find jobs",color: '#2196F3' },
  { id: 3, text: "Set Your Location then swipe away", color: '#2ecc71' }
]

class WelcomeScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      appLoading: null
    }
  }
  
  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
      this.props.navigation.navigate('MapScreen')
      this.setState({appLoading: true})
    }
    else {
      this.setState({appLoading: false})
    }
  } 

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.appLoading == null) {
      return <ActivityIndicator />
    }
    return (
      <Slides sildesData={SLIDES_DATA} navigate={navigate} />
    );
  }
}

export default WelcomeScreen;