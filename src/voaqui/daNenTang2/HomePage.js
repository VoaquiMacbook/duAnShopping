import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const HomePage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.horizontal}>
                <View style={styles.flex}>
                    <Image style={styles.img_avt} source={require('../../voaqui/daNenTang2/assets/image/Logo2.png')}></Image>
                </View>
                <Image style={styles.align_center} source={require('../../voaqui/daNenTang2/assets/image/Setting.png')}></Image>
            </View>
            <View style={[styles.horizontal_seeall]}>
                    <Text style={[styles.txt_newItems, styles.flex]}>Categories</Text>
                    <Text style={styles.txt_seeall}>See more</Text>
                </View>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        paddingStart: '3%',
        paddingEnd: '5%',
        marginTop: '5%'
    },
    // cloumn, row
    vertical: {
        flexDirection: 'column',
    },
    horizontal: {
        flexDirection: 'row',

    },
    // align Items
    align_center: {
        alignSelf: 'center',
    },
    img_avt: {
        width: 165,
        height: 40,
    },
    // flex
    flex: {
        flex: 1,
    },
    horizontal_seeall: {
        flexDirection: 'row',
        marginTop: 30,
    },
    txt_seeall: {
        fontWeight: '500',
        fontSize: 14,
        paddingTop: '1%',
        color:'#4838D1',
    },
})