import React, {useEffect, useState} from "react";
import {StyleSheet} from "react-native";
import {View, Text, FlatList, Button, TouchableOpacity} from "react-native";
import {getUsers} from "../api/API";
import User from "./User";

const Users = (props) => {
const {navigation} = props
    // console.log(props);
    const [users, setUsers] = useState([])
    console.log(users);

    async function fetchData(){
        const users = await getUsers();
        setUsers([...users]);
    }
    useEffect( ()=> {
        fetchData();
        return console.log('hello')
    }, [] )


    return <View>
        <FlatList
            data={users}
            renderItem={({item})=> { return <User nav={navigation} item={item}/>}}
            keyExtractor={item => ''+item.id}
        />

    </View>
};

export default Users;

let styles = StyleSheet.create({});
