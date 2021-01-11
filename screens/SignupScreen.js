import React, { useState, useContext } from 'react'
import { View, TouchableHighlight, Text, TextInput, StyleSheet } from 'react-native'
import { AuthContext } from '../../navigation/AuthProvider'

export const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const { register } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Email'
                onChangeText={(text) => setEmail(text)}
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.textInput}
            />
            <TextInput
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
                autoCapitalize="none"
                secureTextEntry={true}
                style={styles.textInput}

            />
            {/* <TextInput
                placeholder='Password'
                onChangeText={(text) => setConfirmPassword(text)}
                autoCapitalize="none"
                secureTextEntry={true}
                style={styles.textInput}

            /> */}

            <View >
                <TouchableHighlight
                    style={styles.touchable}
                    onPress={register(email, password)}
                >
                    <Text style={styles.Text}>Signup </Text>
                </TouchableHighlight>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
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
        color: 'rgb(232, 223, 223)',
    }
})
