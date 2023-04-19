import React from "react";
import { Text,View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeComp from "../HomeComp";
import SplashScreen from "../SlashScreen";

const Stack = createNativeStackNavigator();
const Navigation = () => {
   return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>            
            <Stack.Screen name="splashscreen" component={SplashScreen}/>
            <Stack.Screen name="homescreen" component={HomeComp}/>
        </Stack.Navigator>
       
    </NavigationContainer>
   )
}


export default Navigation;