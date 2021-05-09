import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {View, Text, FlatList, Button, TouchableOpacity} from "react-native";

const UserDetails = ({route, navigation}) => {
    const {params:{data}} = route
    useEffect(()=> {
        navigation.setOptions({title: data.name})

    }, [])

    return <View style={styles.userDet}>
        <Text>username: {data.username}</Text>
        <Text>email: {data.email}</Text>
    </View>
};

export default UserDetails;

let styles = StyleSheet.create({
    userDet: {
        height: 50,
        backgroundColor: 'orange',
        marginBottom: 5,
    }
});
