import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {getUsers} from "./src/api/API";
import Users from "./src/components/Users";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Posts from "./src/components/Posts";
import UserDetails from "./src/components/UserDetails";

const StackNavigator = createStackNavigator();
export default function App() {


  return (
      <NavigationContainer>
          <StackNavigator.Navigator>
              <StackNavigator.Screen name={"Users"} component={Users}/>
              <StackNavigator.Screen name={"Posts"} component={Posts}/>
              <StackNavigator.Screen name={"UserDetails"} component={UserDetails}/>


          </StackNavigator.Navigator>
      </NavigationContainer>

  );
}


const styles = StyleSheet.create({});

