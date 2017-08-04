import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import AppRouter from './Routes';
class AppNavigator extends Component {
  render() {
    return (
      <AppRouter
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    );
  }
}



export default connect(state => ({ nav: state.nav }))(AppNavigator);