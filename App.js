import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation/MyStack'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/LoginScreen'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';




const App = () => {

  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null)

  useEffect(() => {
    AsyncStorage.getItem('aldreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true')
        setIsFirstLaunch(true)
      } else {
        setIsFirstLaunch(false)
      }
    }
    )
  }, [])

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (<NavigationContainer>
      <MyStack />
    </NavigationContainer>
    )
  } else {
    return <LoginScreen />
  }


};


export default App;
