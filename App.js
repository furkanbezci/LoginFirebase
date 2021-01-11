import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation/MyStack'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/LoginScreen'
import Providers from '../navigation/index'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';




const App = () => {

  return (
    <Providers />
  )


  export default App;
