import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Users from "./src/components/Users";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import User from "./src/components/User";
import UserDetails from "./src/components/UserDetails";
import Posts from "./src/components/Posts";
import PostDetail from "./src/components/PostDetail";

const StackNavigator = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
       <StackNavigator.Navigator>
           {/*<StackNavigator.Screen name={'Users'} component={Users}/>*/}
           {/*<StackNavigator.Screen name={'UserDetails'} component={UserDetails}/>*/}
           <StackNavigator.Screen name={'Posts'} component={Posts}/>
           <StackNavigator.Screen name={'Post Details'} component={PostDetail}/>
       </StackNavigator.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
