import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const StartScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Onboarding
                imageContainerStyles={{ marginBottom: -40, width: '100%', marginTop: -80 }}
                titleStyles={{ marginBottom: -20 }}
                onSkip={() => navigation.navigate('LoginScreen')}
                onDone={() => navigation.replace('LoginScreen')}
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