import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Button
} from 'react-native';
import TextField from 'react-native-md-textinput';
import { AsyncService } from '../services/Async.service';
import CreateVolunteerProfile from "app/components/CreateVolunteerProfile";

export default class CreateAccount extends Component {
    constructor(props) {
        super(props);
        const {params} = this.props.navigation.state;
        this.state = {
            user: params.user
        };
    }

    saveUser() {
        const { navigate } = this.props.navigation;
        let storage = new AsyncService();

        storage.update(this.state.user).then((user) => {
            console.log(user);
          navigate('CreateVolunteerProfile', {user: user});
        });
    };

    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView style={styles.container}>
                    <View style={{ alignItems: 'center', marginTop:15}}>
                        <Text style={styles.header}>PROFILE ACCOUNT</Text>
                        <Image source ={this.state.user.profile_picture} resizeMode="stretch" style={{height:350, width:400, alignItems: 'center'}} />
                    </View>
                    <TextField
                        label='Name'
                        highlightColor={'#00BCD4'}
                        style={[styles.row, {marginTop:15}]}
                        onChangeText={(name) => this.state.user.name = name }
                        value={this.state.user.name}
                    />
                    <TextField
                        label='Email'
                        highlightColor={'#00BCD4'}
                        style={[styles.row, {marginTop:15}]}
                        onChangeText={(email) => this.state.user.email = email}
                        value={this.state.user.email}
                    />
                    <TextField
                        label='Age'
                        highlightColor={'#00BCD4'}
                        style={[styles.row, {marginTop:15}]}
                        onChangeText={(age) => this.state.user.age = age }
                        value={this.state.user.age}
                    />
                    <TextField
                        label='Bio'
                        highlightColor={'#00BCD4'}
                        style={[styles.row, {marginTop:15}]}
                        onChangeText={(about) => this.state.user.about = about }
                        value={this.state.user.about}
                    />
                    <TextField
                        label='Location'
                        highlightColor={'#00BCD4'}
                        style={[styles.row, {marginTop:15}]}
                        onChangeText={(city) => this.state.user.city = city}
                        value={this.state.user.city}
                    />
                    <Button  style={[styles.row, {marginTop:15}]}
                             title="NEXT"
                             onPress={() => this.saveUser()}
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
        alignItems:'flex-end',
        borderBottomWidth:1,
        borderColor:'#e3e3e3',
    },
    title:{
        fontSize:14,
        fontWeight:'600',
        color:'#333'
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
