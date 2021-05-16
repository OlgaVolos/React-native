import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Users from "./src/components/Users";
import Posts from "./src/components/Posts";
import PostDrawer from "./src/components/PostDrawer";
import CameraComponent from "./src/components/CameraComponent";

// const StackNavigator = createStackNavigator(); //потрібен для того, щоб переходити від цілого списку до конкретного
 const BottomTabNavigator = createBottomTabNavigator();

export default function App() {
  return (

 <NavigationContainer>
     <BottomTabNavigator.Navigator tabBarOptions={{tabStyle: {justifyContent: 'center', alignItems: 'center', size: 25}}}>
         <BottomTabNavigator.Screen name={'users'} component={Users}/>
         <BottomTabNavigator.Screen name={'posts'} component={PostDrawer}/>
         <BottomTabNavigator.Screen name={'Camera'} component={CameraComponent} options={{unmountOnBlur: true}}/>
     </BottomTabNavigator.Navigator>

 </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

// options={{unmountOnBlur: true}} для того, щоб при переходах по інших скрінах не знищувалася інфа про камеру
