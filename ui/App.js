import React, { Component } from 'react';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import LoginScreen from './src/pages/Login';
import SignupScreen from './src/pages/Signup';
import HomeScreen from './src/pages/Home';

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen,
  Home: HomeScreen,
});

const App = createAppContainer(AppStackNavigator);

export default App;
