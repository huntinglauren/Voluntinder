import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';
import SwipeCards from 'react-native-swipe-cards';


const Cards = [{
    "id": 1,
    "first_name": "Denise",
    "age": 21,
    "friends": 9,
    "interests": 38
}, {
    "id": 2,
    "first_name": "Henry",
    "age": 27,
    "friends": 16,
    "interests": 49
}, {
    "id": 3,
    "first_name": "Bob",
    "age": 29,
    "friends": 2,
    "interests": 39
}, {
    "id": 4,
    "first_name": "Jessica",
    "age": 20,
    "friends": 18,
    "interests": 50
}, {
    "id": 5,
    "first_name": "Julie",
    "age": 28,
    "friends": 2,
    "interests": 13
}, {
    "id": 6,
    "first_name": "Anna",
    "age": 24,
    "friends": 12,
    "interests": 44
}];


export default class Connecting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            cards: Cards
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }


    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true });
        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.results : [...this.state.data, ...res.results],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    Card(x){
        let picture = {uri: x.picture.large};
        let age = 25;
        return (
            <View style={styles.card}>
                <Image source ={picture} resizeMode="contain" style ={{width:350, height:350}} />
                <View style={{width:350, height:70, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row', margin:15, marginTop:25,}} >
                        <Text style={{fontSize:20, fontWeight:'300', color:'#444'}}>{x.name.first} {x.name.last},</Text>
                        <Text style={{fontSize:21, fontWeight:'200', color:'#444'}}>    {age}</Text>
                        <Text style={{fontSize:21, fontWeight:'200', color:'#444'}}>    {x.location.city}, {x.location.state}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        {/*<View style={{padding:13,  borderLeftWidth:1,borderColor:'#e3e3e3', alignItems:'center', justifyContent:'space-between'}}><Icon name='people-outline' size={20} color="#777" style={{}} /><Text style={{fontSize:16, fontWeight:'200', color:'#555'}}>{x.friends}</Text></View>*/}
                        {/*<View style={{padding:13, borderLeftWidth:1,borderColor:'#e3e3e3', alignItems:'center', justifyContent:'space-between'}}><Icon name='import-contacts' size={20} color="#777" /><Text style={{fontSize:16, fontWeight:'200', color:'#555'}}>{x.interests}</Text></View>*/}
                    </View>
                </View>
                <View style={{width:350, height:70, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row', margin:15, marginTop:25,}} ><Text>im just love to volunteer every day</Text></View>
                    <View><Text>Bio</Text></View>
                </View>
            </View>
        )
    }

    handleYup (card) {
        console.log(`Yup for ${card.text}`)
    }

    handleNope (card) {
        console.log(`Nope for ${card.text}`)
    }

    noMore(){
        return (
            <View style={styles.card} >
                <Text>No More Cards</Text>
            </View>
        );
    }

    yup(){
        console.log(this.refs['swiper']);
        this.refs['swiper']._goToNextCard();
    }

    nope(){
        console.log(this.refs['swiper']);
        this.refs['swiper']._goToNextCard();
    }

    render() {
        return (
            <View style={styles.container}>
                <SwipeCards
                    ref = {'swiper'}
                    cards={this.state.data}
                    containerStyle = {{  backgroundColor: '#f7f7f7', alignItems:'center', margin:20}}
                    renderCard={(cardData) => this.Card(cardData)}
                    renderNoMoreCards={() => this.noMore()}
                    handleYup={this.handleYup}
                    handleNope={this.handleNope} />
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity style = {styles.buttons} onPress = {() => this.nope()}>
                        <Iconz name='ios-close' size={45} color="#888" style={{}} />
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttonSmall}>
                        <Iconz name='ios-information' size={25} color="#888" style={{}} />
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttons} onPress = {() => this.yup()}>
                        <Iconz name='ios-heart-outline' size={36} color="#888" style={{marginTop:5}} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#f7f7f7',
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