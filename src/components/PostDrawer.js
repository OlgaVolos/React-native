import React from "react";
import {StyleSheet} from "react-native";
import {View, Text, FlatList, Button, TouchableOpacity} from "react-native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Posts from "./Posts";
import TemplateComponent from "./TemplateComponent";

const Drawer = createDrawerNavigator();
const PostDrawer = () => {
    return <Drawer.Navigator>
        <Drawer.Screen name="Posts" options={{title: 'posts'}} component={Posts} />
        <Drawer.Screen name="Template" options={{title: 'template'}} component={TemplateComponent} />
    </Drawer.Navigator>
};

export default PostDrawer;

let styles = StyleSheet.create({});
