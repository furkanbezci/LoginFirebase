import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
const Stack = createStackNavigator();

export default function MyStack() {


    return (
        <Stack.Navigator
            headerMode='none'
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            {/* <Stack.Screen name='StartScreen' componenet={StartScreen} /> */}
        </Stack.Navigator>


    )
}

