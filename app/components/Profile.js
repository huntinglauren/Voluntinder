import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,ScrollView
} from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            friends: 1098,
            npClient: {
                name: 'APA!',
                description: 'We save animals',
                location: '123 save animals lane, Austin TX',
                interests: [{activity: 'animals', icon: (<Icon name="paw" color="#4F8EF7" />)}, {activity: 'running', icon: (<Icon name="run-fast" color="#4F8EF7" />)}]
            }
        }

    }

    static navigationOptions = {
        // Customize header background color to make it look cleaner
        headerStyle: {
            backgroundColor: '#FFF',
        },
    };

    getGenderIcon(gender: string) {
        if (gender.localeCompare('female') === 0) {
            return {icon: (<Icon name="gender-female" color="#4F8EF7" />)}
        } else {
            return {icon: (<Icon name="gender-male" color="#4F8EF7" />)}
        }
    }

    render() {
        // Pull navigate out of this.props.navigation
        // and params out of this.props.navigation.state
        const { params } = this.props.navigation.state;
        let profile = {
            user: params.user,
            gender: this.getGenderIcon(params.user.gender)
        };

        return (
            <View style={{flex:1}}>
                <ScrollView style={styles.container}>
                    <Image source ={profile.user.profile_picture} resizeMode="stretch" style={{height:350, width:400, alignItems: 'center'}} />
                    <View style={[styles.row, {marginTop:15}]}>
                        <Text style = {{fontSize:19, fontWeight:'400'}}>{profile.user.name}</Text><Text style={{fontSize:21, fontWeight:'300', marginBottom:-2}}>    {profile.user.age}</Text><Text>  {profile.gender.icon}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={{color:'#444', fontSize:15}}>{profile.user.city}</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={{color:'#555'}}>{profile.user.about}</Text>
                    </View>
                    <View style ={styles.commons}>
                        <Text style = {styles.title}>
                            Interests
                        </Text>
                        <Text style={{marginTop:10, fontSize:14, color:'#666', fontWeight:"400"}}>{this.state.npClient.interests[0].activity} {this.state.npClient.interests[0].icon} {this.state.npClient.interests[1].activity} {this.state.npClient.interests[1].icon}</Text>
                    </View>
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
