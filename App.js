import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {getAllPosts} from "./src/api/API";
import Posts from "./src/components/Posts";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import PostsDetails from "./src/components/PostsDetails";
const StackNavigator = createStackNavigator();

export default function App() {


  return (
      <NavigationContainer>
    <StackNavigator.Navigator>
        <StackNavigator.Screen name={'posts'} component={Posts}/>
        <StackNavigator.Screen name={'Posts Details'} component={PostsDetails}/>
    </StackNavigator.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
