/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import Home from './webapp/page/home/index';
import BaseComponent from './webapp/page/base.component/index';

const App = createStackNavigator({
  Home: { screen: Home },
  BaseComponent: { screen: BaseComponent },
});

export default App;

AppRegistry.registerComponent('myReactNative', () => App);
