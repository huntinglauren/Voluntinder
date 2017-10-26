import React from 'react';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './app/components/Login';
import Profile from './app/components/Profile';
import EditProfile from './app/components/EditProfile';

const SimpleApp = StackNavigator({
    Login: { screen: Login },
    Profile: { screen: Profile },
    EditProfile: { screen: EditProfile }
});

export default SimpleApp;
