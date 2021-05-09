import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {View, Text, FlatList, Button, TouchableOpacity} from "react-native";

const PostsDetails = ({route, navigation}) => {
    const {params: {data}} = route;
    console.log(data)
    useEffect(()=> {
        navigation.setOptions({title: data.title})
    }, [])

    // console.log(props.route.params.data)
    return <View style={styles.posts} >

        <Text>{data.body}</Text>

    </View>
};

export default PostsDetails;

let styles = StyleSheet.create({
    posts: {
        height: 110,
        backgroundColor: 'lightblue',
        marginBottom: 5,

    }
});
