import React, { Component } from 'react';
import {
  ScrollView
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
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Slides sildesData={SLIDES_DATA} navigate={navigate} />
    );
  }
}

export default WelcomeScreen;