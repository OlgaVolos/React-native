import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {View, Text, FlatList, Button, TouchableOpacity} from "react-native";

const UserDetails = ({route, navigation}) => {
    const {params: {data}} = route;

    useEffect( () => {
        navigation.setOptions({title: data.name})
    }, [])
    // console.log(data)
    // console.log(props.route.params.data);
    // або деструктуризувати

    return <View>
        <Text> {data.username}</Text>
        <Text> {data.email}</Text>
        <Text> {data.address.city}</Text>
        <Text> {data.phone}</Text>
    </View>
};

export default UserDetails;

let styles = StyleSheet.create({});
