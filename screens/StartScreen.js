import React from 'react'
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, Touchable } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {

    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)'
    return (
        <View
            style={{
                width: 5,
                height: 5,
                marginHorizontal: 3,
                backgroundColor
            }}
        >
        </View>
    )

}


const Skip = ({ ...props }) => {

    return <Button
        title='Skip'
        color='#000000'
        {...props}
    />
}
const Next = ({ ...props }) => {
    <Button
        title='Next'
        color='#000000'
        {...props}
    />
}
const Done = ({ ...props }) => {
    <TouchableOpacity>
        style={{ marginHorizontal: 10 }}

    </TouchableOpacity>
}


const StartScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Onboarding
                SkipButtonComponent={Skip}
                NextButtonComponent={Next}
                DoneButtonComponent={Done}
                DotComponent={Dots}
                imageContainerStyles={{ marginBottom: -40, width: '100%', marginTop: -80 }}
                titleStyles={{ marginBottom: -20 }}
                onSkip={() => navigation.navigate('LoginScreen')}
                onDone={() => navigation.navigate('LoginScreen')}
                pages={[

                    {
                        backgroundColor: 'black',
                        image: <Image
                            style={{ width: 400, height: 470 }}
                            source={require('../assets/space3.jpg')} />,
                        title: 'Onboarding 1',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: 'black',
                        image: <Image source={require('../assets/space7.jpg')}
                            style={{ width: 400, height: 450 }}
                        />,
                        title: 'Onboarding 2',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    }, {
                        backgroundColor: 'black',
                        image: <Image source={require('../assets/ss.jpg')}
                            style={{ width: 400, height: 300 }}
                        />,
                        title: 'Onboarding 3',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                ]}
            />
        </View>
    )
}
export default StartScreen;

const styles = StyleSheet.create({
    container: {

    },
    text: {

    },
})