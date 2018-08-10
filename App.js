import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Profile from './app/components/Profile';
import HomePage from './app/components/HomePage';
import CreateAccount from './app/components/CreateAccount';
import CreateVolunteerProfile from './app/components/CreateVolunteerProfile';
import Matches from './app/components/Matches';
import Settings from './app/components/Settings';
import Connecting from './app/components/Connecting';

// Tab navigation for Home and Settings screens
const TabNavigation = TabNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor, focused }) => <Icon
                name={focused ? 'address-card-o' : 'address-card-o'}
                size={26}
                style={{ color: tintColor }}
            />
        },
    },
    Connecting: {
        screen: Connecting,
        navigationOptions: {
            tabBarLabel: 'Connect',
            tabBarIcon: ({ tintColor, focused }) => <Icon
                name={focused ? 'rocket' : 'rocket'}
                size={26}
                style={{ color: tintColor }}
            />
        },
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({ tintColor, focused }) => <Icon
                name={focused ? 'cog' : 'cog'}
                size={26}
                style={{ color: tintColor }}
            />
        },
    },
    Matches: {
        screen: Matches,
        navigationOptions: {
            tabBarLabel: 'Matches',
            tabBarIcon: ({ tintColor, focused }) => <Icon
                name={focused ? 'heart-o' : 'heart-o'}
                size={26}
                style={{ color: tintColor }}
            />
        },
    },
});

const SimpleApp = StackNavigator(
    {
        HomePage: { screen: HomePage },
        Profile: { screen: TabNavigation },
        CreateAccount: { screen: CreateAccount },
        CreateVolunteerProfile: { screen: CreateVolunteerProfile },
    },
    { headerMode: 'screen' }
);

export default SimpleApp;
