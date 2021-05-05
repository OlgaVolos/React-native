import React from "react";
import {StyleSheet} from "react-native";
import {View, Image, Text, FlatList, Button, TouchableOpacity} from "react-native";

const User = ({item}) => {
    return <View style={styles.box} >
        <Image style={styles.tinyLogo} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}/>
        <Text style={ styles.item}>{item.name} - {item.age}</Text>
    <Button title={'Press me'}
            onPress={()=> console.log('press')}
    />

    </View>
};

export default User;

let styles = StyleSheet.create({
    box: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        backgroundColor: 'silver',
        marginBottom: 10,
    },
    item: {

        color: 'red',

        fontSize: 30,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});
