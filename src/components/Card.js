import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
//User Card
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
                    <Text>Name: {item.login}</Text>
                    <Text>E-mail: {item.login}</Text>
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
        backgroundColor: '#f0f3f5',
        borderWidth: 1,
        borderColor: '#d1dde6',
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
        borderRadius: 40,
        marginLeft: 10,
        marginRight: 10,
    },
    profiles: {
        flex: 3,
        height: 100,
        borderWidth: 1,
        borderColor: 'red',
        flexDirection: 'column',
    }
});
