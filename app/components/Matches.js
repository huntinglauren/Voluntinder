import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";

export default class Matches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
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

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    };

    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." lightTheme round />;
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text style={styles.header}>
                    Voluntinder Matches
                </Text>
                <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                    <FlatList
                        ItemSeparatorComponent={this.renderSeparator}
                        ListHeaderComponent={this.renderHeader}
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <ListItem
                                roundAvatar
                                title={`${item.name.first} ${item.name.last}`}
                                subtitle={item.email}
                                avatar={{ uri: item.picture.thumbnail }}
                                containerStyle={{ borderBottomWidth: 0 }}
                                onPress={() => navigate('MatchedProfile', { user: {gender: item.gender,
                                        first: item.name.first,
                                        last: item.name.last,
                                        email: item.email,
                                        pic: {uri: item.picture.large},
                                        location: item.location
                                    }
                                    }
                                )}

                            />
                        )}
                        keyExtractor={item => item.email}
                    />
                </List>
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
        fontSize: 30,
        marginVertical: 10,
        alignItems:'stretch',
    },
});
