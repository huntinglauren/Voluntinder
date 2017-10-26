import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,ScrollView
} from 'react-native';
import { UserService } from '../services/User.service';

export default class EditProfile extends Component {
    constructor(props){
        super(props);
        console.log('im editprofile');

        this.state = {
            username: 'Kevin',
            bio: '',
            city: ''
        }
    }


    saveProfile = () => {
        let userService = new UserService();
        userService.saveProfile(this.state);
        const { navigate } = this.props.navigation;
        navigate('Profile', { user: this.state.username });
    }

    render() {
        let pic = {
            uri: "https://i.stack.imgur.com/yX1NS.png"
        };
        return (
            <View style={{flex:1}}>
                <ScrollView style={styles.container}>
                    <Image source ={pic} resizeMode="stretch" style={{height:350, width:400, alignItems: 'center'}} />

                    <Text style={{color:'#555'}}>Bio</Text>
                    <TextInput label={"Bio"}
                               onChangeText={(bio) => this.setState({bio})}
                    />

                    <Text style={{color:'#555'}}>City</Text>
                    <TextInput label={"City"}
                               onChangeText={(city) => this.setState({city})}
                    />

                    <Button
                        onPress={this.saveProfile}
                        title="Save Profile"
                        accessibilityLabel="Save your profile!"
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#f7f7f7',
    },
    row: {
        flexDirection:'row',
        margin:15,
        marginBottom:0,
        marginTop:5,
        alignItems:'flex-end'
    },
    commons:{
        padding:15
    },
    buttons:{
        width:80,
        height:80,
        borderWidth:10,
        borderColor:'#e7e7e7',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40
    },
    description:{
        padding:15,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#e3e3e3',
        marginTop:10,
        marginBottom:10
    },
    buttonSmall:{
        width:50,
        height:50,
        borderWidth:10,
        borderColor:'#e7e7e7',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25
    },
    card: {
        flex: 1,
        alignItems: 'center',
        alignSelf:'center',
        borderWidth:2,
        borderColor:'#e3e3e3',
        width: 350,
        height: 420,
    }

});
