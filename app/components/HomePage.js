import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import WallPaper from './WallPaper';
import {AsyncService} from '../services/Async.service';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { username: ''};
        this.loginType = {
            create: 'create',
            login: 'login'
        };
        this.asyncService = new AsyncService();
    }

    static navigationOptions = {
        header: null
    };

    login = async function logIn(loginType) {
        const { navigate } = this.props.navigation;
        let withFB = true;
        let clearAll = true;

        if (clearAll) {
            this.asyncService.clearAsync();
        }

        if (withFB) {
            this.asyncService.getAccount().then((user) => {
                if (user) {
                    if (loginType === this.loginType.login) {
                        navigate('Profile', { user: user });
                    } else {
                        navigate('CreateAccount', { user: user });
                    }
                } else {
                    this.getFacebookToken(loginType, navigate)
                }
            });
        } else {
            let user = { name: 'Lauren Hunter', id: '123', emaill: 'laurenhunter.atx@gmail.com'};
            if (loginType === this.loginType.login) {
                navigate('Profile', { user: {name: user.name, id: user.id}});
            } else {
                navigate('CreateAccount', { user: {name: user.name, id: user.id}});
            }
        }
    };

    getFacebookToken = async function getToken(loginType, navigate) {
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('342498269493972', {
            permissions: ['public_profile', 'email', 'user_photos', 'user_about_me', 'user_hometown'],
        });

        if (type === 'success') {
            console.log('dont gots it');
            // Get the user's name using Facebook's Graph API
            const initalResponse = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.width(400).height(350),email`);
            let responseJSON = await initalResponse.json();
            const moreDataResponse = await fetch(`https://graph.facebook.com/${responseJSON.id}?access_token=${token}&fields=about,age_range,hometown,gender`);
            let response2JSON = await moreDataResponse.json();
            let user = Object.assign(responseJSON, response2JSON, {token: token});
            console.log('facebook object constructed: ', user);
            // let user = {id: responseJSON.id, token: token, name: responseJSON.name, email: responseJSON.email, pic: {uri: responseJSON.picture.data.url}};


            this.asyncService.save(user).then((user) => {
                console.log('saved and got account: ', user);

                if (loginType === this.loginType.login) {
                    navigate('Profile', { user: user});
                } else {
                    navigate('CreateAccount', { user: user});
                }
            });
        }
    };

    render () {
        return (
            <WallPaper>
                <View style={styles.wrapper}>
                    <View style={{paddingBottom: 15, paddingTop: 10}}>
                        <Text style={styles.text}>Voluntinder</Text>
                        <Text style={styles.subTitle}>Connecting people for the Better</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button style={styles.button} color="#34495e" title="Create Account" onPress={() => this.login(this.loginType.create)}/>
                        <View>
                            <Button style={styles.button2} color="#34495e" title="Login" onPress={() => this.login(this.loginType.login)}/>
                        </View>
                    </View>
                </View>
            </WallPaper>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    title: {
        color: 'black',
        fontSize: 60,
        fontWeight: '900'
    },
    subTitle: {
        textAlign: 'center',
        color: '#ff705e',
        fontWeight: '800',
        fontSize: 40
    },
    text: {
        textAlign: 'center',
        color: '#ff5c3a',
        fontSize: 65,
        fontWeight: '700'
    },
    buttonContainer: {
        backgroundColor: '#f3e0ba',
        borderRadius: 9,
        padding: 1,
        opacity: 0.7
    },
    button: {
        color: '#fff2fe',
        fontWeight: '100',
        opacity: 40
    },
    button2: {
        color: '#ffffff',
        fontWeight: '100',
        opacity: 40,
        paddingTop: 30
    }
});