import React, { Component } from 'react';
import {

    StyleSheet,
    Text,
    View
} from 'react-native';


export default class Settings extends Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Coming soon...</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        fontSize: 20,
        marginVertical: 20,
    },
});
