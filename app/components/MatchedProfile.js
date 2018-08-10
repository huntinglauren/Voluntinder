import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Settings extends Component {

    render() {
        const { navigate, state: { params } } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image source ={params.user.pic} resizeMode="stretch" style={{height:250, width:250, alignItems: 'center'}} />
                <View style={[styles.row, {marginTop:15}]}>
                    <Text style = {{fontSize:19, fontWeight:'400'}}>{params.user.first} {params.user.last}</Text>
                </View>
                <View style={[styles.row, {marginTop:15}]}>
                    <Text style = {{fontSize:19, fontWeight:'400'}}>{params.user.email}</Text>
                </View>
                <View style={[styles.row, {marginTop:15}]}>
                    <Text style = {{fontSize:19, fontWeight:'400'}}>{params.user.location.street} {params.user.location.city}, {params.user.location.state}</Text>
                </View>
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

