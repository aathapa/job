import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import AppRouter from './Routes';

export default class App extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AppRouter />
    );
  }
}