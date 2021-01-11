import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen'
import LoginScreen from '../screens/LoginScreen'
import { SignupScreen } from '../screens/SignupScreen'

const Stack = createStackNavigator();

export default function AuthStack() {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then((value) => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false);
            }
        }); // Add some error handling, also you can simply do setIsFirstLaunch(null)

        // GoogleSignin.configure({
        //   webClientId: 'YOUR_APP_WEB_CLIENT_ID',
        // });

    }, []);

    if (isFirstLaunch === null) {
        return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
    } else if (isFirstLaunch == true) {
        routeName = 'StartScreen';
    } else {
        routeName = 'LoginScreen';
    }


    return (
        <Stack.Navigator
            headerMode='none'
            initialRouteName={routeName}
        >
            <Stack.Screen name='StartScreen' component={StartScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='SignupScreen' component={SignupScreen} />


            {/* <Stack.Screen name='StartScreen' componenet={StartScreen} /> */}
        </Stack.Navigator>


    )
}

