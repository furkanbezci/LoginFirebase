import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { windowHeight, windowWidth } from '../other/Dimensions'

const FormButton = ({ buttonTitle, ...rest }) => {
    return (
        <View>
            <TouchableOpacity {...rest} >
                <Text style={styles.buttonText}>{buttonTitle}</Text>
            </TouchableOpacity>

        </View>
    )
}
export default FormButton
const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff'

    }
})