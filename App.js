import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './app/components/Login';
import Profile from './app/components/Profile';

const SimpleApp = StackNavigator({
    Login: { screen: Login },
    Profile: { screen: Profile }
});

export default SimpleApp;
