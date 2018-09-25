/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import Home from './webapp/page/home/index';
import BaseComponents from './webapp/page/base.components/index';
import ImageComponent from './webapp/page/base.components/image/index';

const App = createStackNavigator({
  Home: { screen: Home },
  BaseComponents: { screen: BaseComponents },
  ImageComponent: {screen: ImageComponent},
});

export default App;

AppRegistry.registerComponent('myReactNative', () => App);
