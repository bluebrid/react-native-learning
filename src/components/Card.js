import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { refDecorator } from 'mobx/lib/api/observable';
export default class Card extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { key, item } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.userImage}>
                    <Image
                        style={styles.image}
                        source={{ uri: item.avatar_url }}
                    />
                </View>

                <View style={styles.profiles}>
                    <Text>{item.login}</Text>
                    <Text>E-mail: {item.email}</Text>
                    <View style={styles.btnGroup}>
                        <TouchableOpacity
                            style={styles.userBtn}
                            onPress={() => {}}>
                            <Text> FOLLOW </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.userBtn}
                            onPress={() => {}}>
                            <Text> UNFOLLOW </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 100,
        marginBottom: 10,
    },
    userImage: {
        flex: 1,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        marginLeft: 15,
    },
    profiles: {
        flex: 3,
        height: 100,
        marginTop: 10,
        marginLeft: 10,
        flexDirection: 'column',
    },
    btnGroup: {
        flex:2,
        flexDirection: 'row',
    },
    userBtn: {
        height: 20,
        width: 50,
        marginRight: 30,
        alignItems: 'center',
        color: 'red',
    }
});
