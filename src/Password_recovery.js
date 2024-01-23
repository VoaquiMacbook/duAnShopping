import {
    StyleSheet, Text, View, Image, TextInput,
    TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'

const Password_recovery = () => {

    return (
        <View style={styles.container}>
            <View style={styles.buttonimg}>
                <Image

                    source={require('../assets/bubble01.png')}
                />
            </View>
            <View style={[styles.buttonimg, { zIndex: -1 }]}>
                <Image

                    source={require('../assets/bubble02.png')}
                />

            </View>
            <View>
                <Image
                    style={styles.logo}
                    source={require('../assets/avatar.png')} />
            </View>
            <View style={styles.welcomeContainer}>

                <Text style={styles.welcome}>Password Recovery </Text>
            </View>
            <View style={styles.loginContainer}>
                <Text style={styles.login}>How you would like to restore your password?</Text>

            </View>

            {/* <View style={styles.inputContainer}>

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
            </View> */}
            <View style={styles.checkcontainer}>
                <View></View>
                <View><Text style={styles.checktxt}>SMS </Text></View>
                <View>
                <Image
                    style={styles.eyeIcon}
                    source={require('../assets/Check.png')}
                />
                </View>
               
            </View>
            <View style={styles.checkcontainer1}>
                <View></View>
                <View><Text style={styles.checktxt1}>EMAIL </Text></View>
                <View>
                <Image
                    style={styles.eyeIcon}
                    source={require('../assets/Check.png')}
                />
                </View>
               
            </View>


            <View style={styles.buttonGGContainer}>
                <TouchableOpacity style={styles.buttonGG}>

                    <Text style={styles.buttonGGLabel}
                    
                    >Next </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.loginContainer1}>
                <Text style={styles.login1}>Cancel  </Text>
             
            </View>
            {/* <View style={styles.loginContainer1}>
                <Text style={styles.login1}>Not you?  </Text>
                <Image
                    style={styles.ggImage}
                    source={require('../assets/arrow-right-button.png')}
                />
            </View> */}

        </View>
    )
}
export default Password_recovery
const styles = StyleSheet.create({
    checktxt1: {
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 19,
        letterSpacing: 0.5,
        color: '#000',
        
    },
    checkcontainer1:{
        width:'50%',
        borderWidth: 0.5,
        borderColor: 'gray',
       
        backgroundColor: '#FFEBEB',
        paddingVertical: 10,
        paddingHorizontal: 30,
        gap: 5,
        borderRadius: 10,
        justifyContent:"space-between",
        alignItems:'',
        flexDirection:'row',
        marginBottom:150,
        marginTop:10,
        
        
        
    },
    checktxt: {
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 19,
        letterSpacing: 0.5,
        color: 'blue',
        
    },
    checkcontainer:{
        width:'50%',
        borderWidth: 0.5,
        borderColor: 'gray',
       marginTop:10,
        backgroundColor: '#E5EBFC',
        paddingVertical: 10,
        paddingHorizontal: 30,
        gap: 5,
        borderRadius: 10,
        justifyContent:"space-between",
        alignItems:'',
        flexDirection:'row',
        
        
        
    },
    eyeIcon: {
        position: 'absolute',
       
       
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
        position: 'absolute',
        right: '30%', // Đặt giá trị right tại đây
        top: 19,
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
        lineHeight: 33,
        textAlign: 'center',
        letterSpacing: 0.5,
        color: '#202020',
        padding: 18,
    },
    loginContainer1: {
       
        width: '100%'
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
        width: '80%',
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
        marginTop: '30%',
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