import React, { useState, useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './authStack'
import MyStack from './MyStack';
import { AuthContext } from './AuthProvider'
import auth from '@react-native-firebase/auth';

export const Routes = () => {
    const { user, setUser } = useContext(AuthContext)
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user)
        if (initializing) setInitializing(false)
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null //loading de ekleyebilirsin bunun yerine

    return (
        <NavigationContainer>
            { user ? <Mystack /> : <AuthStack />}
        </NavigationContainer>
    )
}
