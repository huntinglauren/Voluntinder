import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UserService } from '../services/User.service';
import { User } from '../shared/user/User';

export default class FacebookLogin extends Component {
    userService = new UserService();

    constructor(props) {
        super(props);
        this.state = { username: ''};
    }

    login = async function logIn() {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('342498269493972', {
            permissions: ['public_profile'],
        });

        if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            console.log(response);
            let user: User = this.userService.getUserByFacebookId(response.id);
        }
    };

    render() {
        return (
            <View style={styles.header}>
                <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.login}>
                    Sign up with Facebook
                </Icon.Button>
                <Text>{this.state.username}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center'
    }
});
