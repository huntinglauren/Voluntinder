import React, { Component } from 'react';
import { StyleSheet, View, Button, ScrollView, Image, Text, ImageBackground } from 'react-native';

import FacebookLogin from './FacebookLogin';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: ''};
    }

    render() {
        let pic = {
            uri: "https://challengefailure.org/wp-content/uploads/2016/03/home-post-featured-image-2.jpg"
        };
        const { navigate } = this.props.navigation;
        return (
                <View style={styles.container}>
                    <Image source={pic} resizeMode="stretch" style={{height:150, width:200, alignItems: 'center'}}/>
                    <FacebookLogin navigation={facebook}/>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    contentContainerStyle: {
        height:            700,
        alignItems:        'stretch',
        paddingHorizontal: 15
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header: {
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    }
});
