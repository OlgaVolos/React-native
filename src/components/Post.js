import React from "react";
import {StyleSheet} from "react-native";
import {View, Text, FlatList, Button, TouchableOpacity} from "react-native";

const Post = (props) => {
    const {item, nav} = props;
    return <View style={styles.posts}>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
        <Text> {item.body}</Text>
        <Button title={'posts details'} onPress={() => {
            nav.navigate('Posts Details', {data: item})
        }}/>
    </View>
};

export default Post;

let styles = StyleSheet.create({
    posts: {
        height: 150,
        backgroundColor: 'lightblue',
        marginBottom: 5,

    }
});
