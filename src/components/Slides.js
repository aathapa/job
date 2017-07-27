import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component{
  constructor(props) {
    super(props);
  }

  renderLastSlides(index) {
    if (index === this.props.sildesData.length - 1) {
      return (
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={()=> this.props.navigate('AuthScreen')}
        >
          <Text style={{color: '#fff',fontSize: 16}}>GO Now</Text>
        </TouchableOpacity>
      );
    }
  }

  renderSlides() {
    return this.props.sildesData.map((slideData, index) => {
      return (
        <View key={index} style={[styles.container, { backgroundColor: slideData.color }]}>
          <Text style={styles.textStyle}>{slideData.text}</Text>
          <View style={{marginTop: 30}}>
            {this.renderLastSlides(index)}
          </View>
          
        </View>
      );
      
    }

    )
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH, 
  },
  buttonStyle: {
    width: SCREEN_WIDTH - 50, 
    height: 50,
    backgroundColor: '#27ae60',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 24,
    color: '#fff'
  }
}

export default Slides;