import React from "react";
import {StyleSheet} from "react-native";
import {View, Text, FlatList, Button, TouchableOpacity} from "react-native";

const User = (props) => {
    const {item, nav} = props;
    return <View style={styles.box}>
        <Text> name: {item.name}</Text>
        <Text> email: {item.email}</Text>
        <Button title={'User details'} onPress={() => {
            nav.navigate('UserDetails', {data: item});

        }}/>
    </View>
};
export default User;

let styles = StyleSheet.create({
    box:{
        height: 100,
        backgroundColor: 'lightblue',
        marginBottom: 3,
    },
});
