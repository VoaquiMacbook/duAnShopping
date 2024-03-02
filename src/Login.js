import { TouchableOpacity, Image, StyleSheet, Text, View, TextInputBase, TextInput } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={{ width: 24, height: 24 }} source={require('../assets/images/Left.png')}></Image>
            </TouchableOpacity>
            <View style={{ padding: 20 }}>
                <View style={{ marginBottom: '15%', }}>
                    <Text style={styles.txt_tilte_rv}>Sign in</Text>
                    <Text style={styles.txt_tilte_rv2}>Welcome back</Text>
                </View>

                <View style={styles.vertical}>
                    <View style={styles.horizontal}>
                        <Image style={{ margin: 10 }} source={require('../assets/images/Lock.png')}></Image>
                        <Image style={{ margin: 10 }} source={require('../assets/images/Line.png')}></Image>
                        <TextInput
                            style={styles.input}
                            placeholder="Email address" />
                    </View>
                    <View style={{ width: '100%', height: 0.5, backgroundColor: 'gray' }}></View>
                </View>
                <View style={styles.vertical2}>
                    <View style={[styles.horizontal]}>
                        <Image style={{ margin: 10 }} source={require('../assets/images/Message.png')}></Image>
                        <Image style={{ margin: 10 }} source={require('../assets/images/Line.png')}></Image>
                        <TextInput
                            style={styles.input}
                            placeholder="Email address" />
                        <Image style={{ margin: 10 }} source={require('../assets/images/eye.png')}></Image>
                    </View>
                    <View style={{ width: '100%', height: 0.5, backgroundColor: 'gray' }}></View>
                </View>
            </View>
            <Text style={styles.txt_fgot}>Forgot Password?</Text>
            <TouchableOpacity style={styles.btn_right}><Image style={{margin:20}} source={require('../assets/images/Right.png')}></Image></TouchableOpacity>
            <View style={styles.horizontal}>
            <Text style={styles.txt_tilte_rv3}>New menber? </Text>
            <Text style={styles.txt_fgot1}>Sign up</Text>
            </View>
           
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    btn_right: {
        backgroundColor: '#324A59',
        width: 64,
        height: 64,
        borderRadius:30,
        marginHorizontal:'75%',
        marginVertical:'30%',
    },
    txt_fgot: {
        textAlign: 'center',
        color: '#001833',
        fontWeight: '500',
    },
    txt_fgot1: {
        color: '#001833',
        fontWeight: '500',
        lineHeight: 30,
    },
    line: {
        width: '80%', // Độ rộng của đường line
        height: 2,
        backgroundColor: 'black', // Màu sắc của đường line
    },
    txt_tilte_rv2: {
        fontSize: 18,
        lineHeight: 30,
        fontWeight: '500',
        fontFamily: 'raleway',
        color: 'gray',
        paddingStart: '3%',

    },
    txt_tilte_rv3: {
        lineHeight: 30,
        fontWeight: '500',
        fontFamily: 'raleway',
        color: 'gray',
        paddingStart: '3%',

    },
    input: {
        padding: 10,
        flex: 1,
    },
    container: {
        paddingStart: '3%',
        paddingEnd: '3%',
        marginTop: '5%'
    },
    txt_tilte_rv: {
        fontSize: 22,
        lineHeight: 60,
        fontWeight: '500',
        fontFamily: 'raleway',
        color: 'black',
        paddingStart: '3%',
        marginTop: '5%',

    },
    horizontal: {
        flexDirection: 'row',
    },
    horizontal2: {
        flexDirection: 'row',

    },
    vertical: {
        flexDirection: 'column',
    },
    vertical2: {
        flexDirection: 'column',
        marginTop: '5%',
    },
})