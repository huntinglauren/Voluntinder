import React, { Component } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UserService } from '../services/User.service';

export default class FacebookLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { username: ''};
        this.loginType = {
            create: 'create',
            login: 'login'
        };
    }

    login = async function logIn(pageType) {
        let userService = new UserService();
        const { navigate } = this.props.navigation;
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('342498269493972', {
            permissions: ['public_profile', 'email', 'user_photos'],
        });

        if (type === 'success') {
            if (pageType === this.loginType.login) {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                let responseJSON = await response.json();
                userService.getUserByFacebookId(Number(responseJSON.id)).then((user) => {
                    navigate('Profile', { user: user});
                });
            } else {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture,email`);
                let responseJSON = await response.json();
                console.log(responseJSON);
                userService.saveProfile(responseJSON).then((user) => {
                    navigate('CreateAccount', { user: user});
                });
            }
        }
    };

    render() {
        return (
            <View style={styles.header}>
                <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => this.login(this.loginType.create)}>
                    Sign up with Facebook
                </Icon.Button>
                <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => this.login(this.loginType.login)}>
                    Login with Facebook
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
