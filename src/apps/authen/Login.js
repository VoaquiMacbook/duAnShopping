import {
    StyleSheet, Text, View, Image, TextInput,
    TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'

const Login = () => {

    return (
        <View style={styles.container}>
            <View style={styles.buttonimg}>
                <Image

                    source={require('../../../assets/image/bubblePass.png')}
                />
            </View>
            <View style={[styles.buttonimg, { zIndex: -1 }]}>
                <Image

                    source={require('../../../assets/image/bubblePass2.png')}
                />

            </View>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcome}>Login </Text>
            </View>


            <View style={styles.loginContainer}>
                <Text style={styles.login}>Good to see you back!</Text>
                <Image
                    style={styles.eyeIcon}
                    source={require('../../../assets/image/heart.png')}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, styles.password]}
                    placeholder='Email'
                />
            </View>



            <View style={styles.buttonGGContainer}>
                <TouchableOpacity style={styles.buttonGG}>

                    <Text style={styles.buttonGGLabel}

                    >Next </Text>
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
export default Login
const styles = StyleSheet.create({
    eyeIcon: {
        top: 15
    },
   
    password: {
        marginTop: 3,
    },


    input: {
        width: '100%',
        height: 48,
        borderWidth: 0.5,
        borderColor: '#fff',
        borderRadius: 8,
        backgroundColor: '#f8f8f8',
        paddingVertical: 15,
        paddingHorizontal: 17,
        marginTop: 8,
        borderRadius: 60,
    },

    inputContainer: {
        width: '100%',

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
        color: '#FFF',
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
        marginTop: 35,
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
        lineHeight: 35,
        fontFamily: 'light',
        padding: 5,
        // letterSpacing: 0.5,
        color: '#202020',

    },
    loginContainer: {

        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    welcomeContainer: {
        marginTop: '100%',
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
        // marginTop: 45,

    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 20,
    }
})