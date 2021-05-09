import React, {useEffect, useState} from "react";
import {StyleSheet} from "react-native";
import {View, Text, FlatList, Button, TouchableOpacity} from "react-native";
import {getAllPosts} from "../api/API";
import Post from "./Post";

const Posts = (props) => {
    console.log(props);

    const  {navigation} = props
    const [posts, setPosts] = useState([]);
    console.log(posts);

    async function fetchData(){
        const posts = await getAllPosts();
        setPosts([...posts])

    }

    useEffect( ()=>{
        fetchData();
        return console.log('hello')
    }, [])
    return <View>
       <FlatList data={posts}
                 renderItem={({item})=>{ return <Post nav={navigation} item={item}/>}}
                 keyExtractor={item => ''+item.id}/>
    </View>
};

export default Posts;

let styles = StyleSheet.create({});
