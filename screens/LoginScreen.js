import React, { useState, useContext } from 'react'
import { View, TouchableHighlight, Text, TextInput, StyleSheet, Image } from 'react-native'
import { AuthContext } from '../navigation/AuthProvider'
import Input from '../components/Input'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import { windowHeight, windowWidth } from '../other/Dimensions'



const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useContext(AuthContext)


    return (
        <View style={styles.container}>
            <Image source={require('../assets/ss.jpg')}
                style={styles.logo}
            />

            <Text>React Native Login App</Text>
            <Input
                placeholderText='Email'
                iconType='user'
                onPress={(email) => setEmail(email)}
            />
            <Input
                placeholderText='Password'
                iconType='lock'
                secureTextEntry={true}
                onPress={(email) => setEmail(email)}
            />


            <View >
                <TouchableHighlight

                    onPress={navigation.navigate('SignupScreen')}
                >
                    <Text style={styles.Text}>Signup with email</Text>
                </TouchableHighlight>
            </View>
            <View  >
                <TouchableHighlight

                    onPress={login(email, password)}
                >
                    <Text style={styles.Text}>Login</Text>
                </TouchableHighlight>
            </View>
            <TouchableHighlight

                onPress={''}
            >
                <Text style={styles.Text}>Signin with Google</Text>
            </TouchableHighlight>
            <TouchableHighlight

                onPress={''}
            >
                <Text style={styles.Text}>Signin with Facebook</Text>
            </TouchableHighlight>

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    textInput: {
        borderWidth: 2,
        marginTop: 10,
        borderRadius: 3,

    },
    touchable: {
        maxWidth: 300,
        maxHeight: 75,
        width: 250,
        height: 50,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: 'rgb(94, 3, 3)'
        // 64, 41, 36
    },
    touchablePosition: {
        alignItems: 'center',
        margin: 10,
    },
    Text: {
        color: 'black',
    },
    logo: {
        width: 250,
        height: 150,
        resizeMode: 'cover',
    }
})
