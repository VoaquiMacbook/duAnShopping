import {
    StyleSheet, Text, View, Image, TextInput,
    TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'

const Acccount = () => {

    return (
        <View style={styles.container}>
            <View style={styles.buttonimg}>
                <Image

                    source={require('../../../../../assets/image/bubbleAcc2.png')}
                />
            </View>
            <View style={[styles.buttonimg1, { zIndex: -1 }]}>
                <Image

                    source={require('../../../../../assets/image/bubbleAcc.png')}
                />
            </View>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcome}>Create Account </Text>
            </View>
            <View style={styles.vongtron}>
                <Image
                    style={styles.logo}
                    source={require('../../../../../assets/image/CameraAcc2.png')} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, styles.password]}
                    placeholder='Email'
                />
            </View>
            <View style={[styles.inputContainer]}>
                <TextInput
                    style={[styles.input]}
                    placeholder='Password'
                    secureTextEntry={true}

                />
                <Image
                    style={styles.eyeIcon}
                    source={require('../../../../../assets/image/eyeAcc.png')}
                />

            </View>
            <View style={styles.inputContainer1}>


                <Image
                    style={styles.eyeIcon1}
                    source={require('../../../../../assets/image/England.png')}
                />

                <Image
                    style={styles.eyeIcon1}
                    source={require('../../../../../assets/image/arrowAcc.png')}
                />
                <TextInput
                    style={styles.input1}
                    placeholder='Your number'
                    keyboardType='numeric'
                    secureTextEntry={false}
                />

            </View>



            <View style={styles.buttonGGContainer}>
                <TouchableOpacity style={styles.buttonGG}>

                    <Text style={styles.buttonGGLabel}

                    >Done </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.loginContainer1}>
                <Text style={styles.login1}>Cancel  </Text>
                {/* <Image
            style={styles.ggImage}
            source={require('../assets/arrow-right-button.png')}
          /> */}
            </View>

        </View>
    )
}
export default Acccount
const styles = StyleSheet.create({
    eyeIcon: {
        position: 'absolute',
        right: 17,
        top: 20,
    },
    eyeIcon1: {
        margin: 5,
    },
    password: {
        marginTop: 32,
    },
    errorText: {
        color: '#FB7181',
        fontSize: 14,

    },
    highlight: {
        borderWidth: 2,
        borderColor: 'red',
    },
    input: {
        width: '100%',
        height: 48,
        borderWidth: 0.5,
        borderColor: '#fff',
        borderRadius: 8,
        backgroundColor: '#f8f8f8',
        paddingVertical: 11,
        paddingHorizontal: 17,
        marginTop: 8,
        borderRadius: 60,
    },
    input1: {
        width: '100%',
        paddingLeft: 20,

    },
    inputContainer: {
        width: '100%',

    },
    inputContainer1: {
        width: '100%',
        marginTop: 8,
        height: 48,
        // borderWidth: 0.5,

        borderRadius: 8,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        paddingHorizontal: 17,
        flexDirection: 'row',
        borderRadius: 60,
    },
    buttonimg: {
        position: 'absolute',
        left: 0,
        top: 0
    },
    buttonimg1: {
        position: 'absolute',
        right: 0,
        top: 0
    },
    vongtron: {
        paddingLeft: 10,
        marginTop: '10%'
    },
    ggImage: {
        position: 'absolute',
        right: 40, // Đặt giá trị right tại đây
        top: 19,
    },

    buttonGGLabel: {
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: 31,
        letterSpacing: 0.5,
        color: '#F3F3F3',
    },
    buttonGG: {
        width: '100%',
        height: 57,
        backgroundColor: '#004CFF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonGGContainer: {
        width: '100%',
        marginTop: 52,
    },
    buttonLabel: {
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.5,
        color: '#fff',
    },
    button: {
        width: '100%',
        height: 57,
        backgroundColor: '#d17842',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '100%',
        marginTop: 41
    },


    login1: {
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: 26,
        textAlign: 'center',
        letterSpacing: 0.5,
        color: '#202020',

    },
    loginContainer1: {
        marginTop: 18,
        width: '100%'
    },

    login: {
        fontSize: 19,
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: 33,
        textAlign: 'center',
        letterSpacing: 0.5,
        color: '#202020',
        padding: 25,
    },
    loginContainer: {
        marginTop: 16,
    },
    welcomeContainer: {
        marginTop: '20%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

    },
    welcome: {
        fontSize: 50,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 52, // Sửa giá trị lineHeight tại đây
        letterSpacing: 0.5,
        color: '#202020',
        padding: 10,
        // marginTop: 45,
    },




    logo: {
        width: 90,
        height: 90,

        resizeMode: 'contain',
    },

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 17
    }
})