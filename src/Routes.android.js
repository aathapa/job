import React, { Component } from 'react';
import { 
  TouchableOpacity,
  View,
  Text
 } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingScreen from './screens/SettingScreen';

const review = StackNavigator({
  Review: { screen: ReviewScreen },
  Setting: {
    screen: SettingScreen,
    navigationOptions: {
      title: 'Setting'
    }
  },
}, 
)

const Tabs = TabNavigator({
  Deck: { screen: DeckScreen },
  Review: { screen: review },
}, 
  {
    tabBarPosition: 'bottom'
  }
)

const AppRouter = StackNavigator({
  Map: { screen: MapScreen },
  Tabs: { screen: Tabs },
  WelcomeScreen: {
    screen: WelcomeScreen
  },
  AuthScreen: {
    screen: AuthScreen
  },
  
},
{
  headerMode: 'none',
}  

)

export default AppRouter;