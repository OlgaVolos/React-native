import React from "react";
import {StyleSheet} from "react-native";
import {View, Text, FlatList, Button, TouchableOpacity} from "react-native";

const User = (props) => {
    const {item, nav} = props
    return <View style={styles.user} >
        <Text>name: {item.name}</Text>
        <Text>username: {item.username}</Text>
        <Text>email: {item.email}</Text>
       <Button title={'details'} onPress={()=> {
           nav.navigate('UserDetails', {data:item})
       }}/>
    </View>
};

export default User;

let styles = StyleSheet.create({
    user: {
        height: 100,
        backgroundColor: 'pink',
        marginBottom: 5,
    }
});
