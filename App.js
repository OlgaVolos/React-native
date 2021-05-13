import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Users from "./src/components/Users";
import Posts from "./src/components/Posts";
import PostDrawer from "./src/components/PostDrawer";

// const StackNavigator = createStackNavigator(); //потрібен для того, щоб переходити від цілого списку до конкретного
 const BottomTabNavigator = createBottomTabNavigator();

export default function App() {
  return (

 <NavigationContainer>
     <BottomTabNavigator.Navigator tabBarOptions={{tabStyle: {justifyContent: 'center', alignItems: 'center', size: 25}}}>
         <BottomTabNavigator.Screen name={'users'} component={Users}/>
         <BottomTabNavigator.Screen name={'posts'} component={PostDrawer}/>
     </BottomTabNavigator.Navigator>

 </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
