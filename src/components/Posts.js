import React, {useEffect, useState} from "react";
import {StyleSheet} from "react-native";
import {View, Text, FlatList, Button, TouchableOpacity} from "react-native";
import {getPosts} from "../api/API";
import Post from "../components/Post";

const Posts = (props) => {
    const {navigation} = props;
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        const posts = await getPosts();
        setPosts([...posts])
    };
    useEffect(() => {
        fetchData()
    }, [])

    return <View>
        <FlatList
            data={posts}
            renderItem={({item}) => {
                return <Post item={item}
                nav={navigation}/>
            }}
            keyExtractor={item => '' + item.id}/>
    </View>
};

export default Posts;

let styles = StyleSheet.create({

});
