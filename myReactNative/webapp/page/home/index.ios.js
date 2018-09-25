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
      <View>
        <Button
          title="Go to BaseComponents"
          onPress={() =>
            navigate('BaseComponents', { from: 'Home' })
          }
        />
        <Button
          title="Go to Image"
          onPress={() =>
            navigate('ImageComponent', { from: 'Home' })
          }
        />
      </View>
    );
  }
}

export default Home;