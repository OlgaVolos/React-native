import React from "react";
import {StyleSheet} from "react-native";
import {View, Text, FlatList, Button, TouchableOpacity} from "react-native";

const Post = (props) => {
    const {item, nav} = props
    return <View style={styles.post} >
        <Text>title: {item.title}</Text>
        <Text>body: {item.body}</Text>
        <Button title={"Post Details"} onPress={()=>{
            nav.navigate("Post Details", {data: item})
        }}/>
    </View>
};

export default Post;

let styles = StyleSheet.create({
    post: {
        height: 150,
        backgroundColor: 'purple',
        marginBottom: 5,
    }

});
