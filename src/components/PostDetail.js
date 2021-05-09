import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {View, Text, FlatList, Button, TouchableOpacity} from "react-native";

const PostDetail = ({route, navigation}) => {
    const {params: {data}} = route;


    useEffect(() => {
        navigation.setOptions({title: data.title})
    }, []);


    return <View style={styles.postDet}>
        <Text>title: {data.title} </Text>
        <Text>body: {data.body} </Text>
    </View>
};

export default PostDetail;

let styles = StyleSheet.create({
    postDet: {
        height: 125,
        backgroundColor: 'green',
        marginBottom: 5,
    }
});
