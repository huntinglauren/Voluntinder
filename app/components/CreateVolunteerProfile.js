import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';


export default class CreateVolunteerProfile extends Component {
    constructor(props) {
        super(props);
        const {params} = this.props.navigation.state;
        this.state = {
            user: params.user
        };
    }

    createAccount() {
        const { navigate } = this.props.navigation;
        navigate('Profile', {user: this.state.user})
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Coming soon...</Text>
                <Button  style={[styles.row, {marginTop:15}]}
                         title="keep on moving, nothing to see here..."
                         onPress={() => this.createAccount() }
                />
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
