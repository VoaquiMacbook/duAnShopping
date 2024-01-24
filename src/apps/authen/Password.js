import {
    StyleSheet, Text, View, Image, TextInput,
    TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'

const Password = () => {

    return (
        <View style={styles.container}>
            <View style={styles.buttonimg}>
                <Image

                    source={require(' ../../../assets/image/bubblePass.png')}
                />
            </View>
            <View style={[styles.buttonimg, { zIndex: -1 }]}>
                <Image

                    source={require('../../../assets/image/bubblePass2.png')}
                />

            </View>
            <View style={styles.vongtron}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/image/Ava.png')} />
            </View>
            <View style={styles.welcomeContainer}>

                <Text style={styles.welcome}>Hello, Romina!! </Text>
            </View>
            <View style={styles.loginContainer}>
                <Text style={styles.login}>Type your password</Text>

            </View>

            <View style={styles.inputContainer}>

                <View>
                    <TextInput
                        style={[styles.input, styles.password]}
                        keyboardType='numeric'
                    />
                </View>
                <View>
                    <TextInput
                        style={[styles.input, styles.password]}
                        keyboardType='numeric'
                    />
                </View>
                <View>
                    <TextInput
                        style={[styles.input, styles.password]}
                        keyboardType='numeric'
                    />
                </View>
                <View>
                    <TextInput
                        style={[styles.input, styles.password]}
                        keyboardType='numeric'
                    />
                </View>
            </View>



            <View style={styles.loginContainer1}>
                <Text style={styles.login1}>Not you?  </Text>
                <Image
                    style={styles.ggImage}
                    source={require('../../../assets/image/ButtonStart.png')}
                />
            </View>

        </View>
    )
}
export default Password
const styles = StyleSheet.create({
    vongtron: {
        borderRadius:120,
         borderWidth: 0.5,
      paddingTop:'40%',
        borderColor: 'gray',
        alignItems:'center',
       
        backgroundColor:'#fff',
        
        
          },
    eyeIcon: {
        position: 'absolute',
        right: '35%',
        top: 10,
    },
    eyeIcon1: {
        position: 'absolute',
        left: 17,
        top: 20,
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
        width: 50,
        height: 48,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 8,
        backgroundColor: '#F0F0F0',
        paddingVertical: 11,
        paddingHorizontal: 17,
        gap: 6,
        borderRadius: 10,
        margin: 3,
    },

    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "center"

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

    },

    buttonGGLabel: {
        fontSize: 22,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 26,
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
        marginTop: '8%',
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

        letterSpacing: 0.5,
        color: '#202020',

    },
    loginContainer1: {
        width: '100%',
        textAlign: 'center',
        paddingTop: '50%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 1,
        flexDirection: 'row',

    },

    login: {
        fontSize: 19,
        fontStyle: 'normal',
        fontWeight: '300',
        lineHeight: 35,
        fontFamily: 'bold',
        textAlign: 'center',
        letterSpacing: 0.5,
        color: '#202020',
        padding: 1,
    },
    loginContainer: {
        marginTop: 16,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeContainer: {
        marginTop: '5%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

    },
    welcome: {
        fontSize: 28,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 52, // Sửa giá trị lineHeight tại đây
        letterSpacing: 0.5,
        color: '#202020',
        // marginTop: 45,

    },




    logo: {
        width: 106,
        height: 106,
        borderRadius: 50,
        
        resizeMode: 'contain',
    },

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',

        padding: 20,
    }
})