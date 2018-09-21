import React, { Component } from 'react';
import {Button, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to BaseComponent"
        onPress={() =>
          navigate('BaseComponent', { from: 'Home' })
        }
      />
    );
  }
}

export default Home;