import {
    StyleSheet, Text, View, Image, TextInput,
    TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'

const Acccount = () => {
    const [name, setName] = useState('');
    // state quản lý bắt lỗi
    const [isNameValid, setIsNameValid] = useState(true);

    const handleOnSubmit = () => {
        if (!name || name.length < 3) {
            setIsNameValid(false);
            return;
        }
        setIsNameValid(true);
        return;
    }
    return (
        <View style={styles.container}>
            <View style={styles.buttonimg}>
                <Image

                    source={require('../assets/bubble02-1.png')}
                />
            </View>
            <View style={[styles.buttonimg1, { zIndex: -1 }]}>
                <Image

                    source={require('../assets/bubble01-1.png')}
                />
            </View>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcome}>Create Acccount </Text>
            </View>
            <View style={styles.vongtron}>
                <Image
                    style={styles.logo}
                    source={require('../assets/cameraicon.png')} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input,styles.password]}
                    placeholder='Email'
                />
            </View>
            <View style={[styles.inputContainer]}>
                <TextInput
                    style={[styles.input, !isNameValid && styles.highlight]}
                    placeholder='Password'
                    secureTextEntry={true}
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <Image
                    style={styles.eyeIcon}
                    source={require('../assets/eye.png')}
                />
                {!isNameValid && (
                    <Text style={styles.errorText}>Password is not true. Try Again!</Text>
                )}
            </View>
            <View style={[styles.inputContainer1]}>
               
          
                <TextInput
                    style={[styles.input1]}
                    placeholder='Number'
                    keyboardType='numeric'
                    secureTextEntry={false}
                   
                  
                />
               
               <Image
                    style={styles.eyeIcon1}
                    source={require('../assets/eye.png')}
                />
            </View>



            <View style={styles.buttonGGContainer}>
                <TouchableOpacity style={styles.buttonGG}>

                    <Text style={styles.buttonGGLabel}
                        onPress={handleOnSubmit}
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
        width: '100%',
        height: 48,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingVertical: 11,
        paddingHorizontal: 17,
        marginTop: 8,
      borderRadius:60,
    },
    input1: {
        width: '100%',
        height: 48,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingVertical: 11,
        paddingHorizontal: 17,
        marginTop: 8,
      
      borderRadius:60,
    },
    inputContainer: {
        width: '100%',
       
    },
    inputContainer1: {
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
        lineHeight: 33,
        textAlign: 'center',
        letterSpacing: 0.5,
        color: '#202020',
        padding: 18,
    },
    loginContainer1: {
        marginTop: 1,
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
        // marginTop: 45,
    },




    logo: {
        width: 55,
        height: 50,
        marginTop: 82,
        left:20,
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