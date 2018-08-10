import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import FacebookLogin from './FacebookLogin';

export default class WallPaper extends Component {
    render() {
        return (
            <Image source={require('../images/wood2.jpeg')} style={styles.backgroundImage}>
                {this.props.children}
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});

