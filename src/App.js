import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from '../store/store';
import AppNavigator from './AppNavigator';

export default class App extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}