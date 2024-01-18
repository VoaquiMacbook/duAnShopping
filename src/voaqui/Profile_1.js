import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Profile_1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.vertical}>
                <View style={[styles.horizontal]}>
                    <TouchableOpacity style={[styles.img_avt, styles.btn_avt]}>
                        <Image style={styles.img_avt} source={require('../assets/image/img_avt2.jpg')}></Image>
                    </TouchableOpacity>
                    <View style={styles.flex}>
                        <TouchableOpacity style={styles.btn_container}>
                            <Text style={styles.txt_myActivity}>My Activity</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.horizontal]}>
                        <View>
                            <TouchableOpacity style={styles.btn_icon}>
                                <Image style={styles.cs_icon} source={require('../assets/image/ic_vouchers.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btn_icon}>
                                <Image style={styles.cs_icon_mess} source={require('../assets/image/ic_mess.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.btn_icon}>
                                <Image style={styles.cs_icon_setting} source={require('../assets/image/ic_setting.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.txt_tilte}>Hello, Romina!</Text>
                    <TouchableOpacity style={styles.btn_container_thongbao}>
                        <Text style={styles.txt_thongbao}>Announcement</Text>
                        <View style={styles.horizontal}>
                        <Text style={[styles.txt_thongbaoS, styles.flex]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit luctus libero ac vulputate.</Text>
                            <TouchableOpacity style={{marginEnd:'3%'}}>
                               
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.txt_tilte_rv}>Recently viewed</Text>
                    
                </View>
            </View>
        </View>
    )
}

export default Profile_1
const styles = StyleSheet.create({
    // container
    container: {
        paddingStart: '5%',
        paddingEnd:'5%',
    },
    // cloumn
    vertical: {
        flexDirection: 'column',
    },
    horizontal: {
        flexDirection: 'row',
    },
    // flex
    flex: {
        flex: 1,
    },
    // custom avt
    img_avt: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginEnd: '3%',
        paddingStart: '1.2%',
        

    },
    btn_avt: {
        backgroundColor: 'white',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',

    },
    // custom button
    btn_container: {
        backgroundColor: '#004CFF',
        width: '65%',
        height: 35,
        borderRadius: 20,
        justifyContent: 'center',
        marginVertical: '4%',
    },
    txt_myActivity: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
    },
    // custom icon
    btn_icon: {
        backgroundColor: '#F8F8F8',
        width: 38,
        height: 38,
        borderRadius: 20,
        marginStart: 10,
        justifyContent: 'center',
        marginVertical: '16%',
    },
    cs_icon: {
        width: 18,
        height: 18,
        marginStart: '25%'

    },
    cs_icon_mess: {
        width: 15,
        height: 10,
        marginStart: '25%'
    },
    cs_icon_setting: {
        width: 35,
        height: 35,
        marginStart: '10%'
    },
    // custom tilte
    txt_tilte:{
        fontSize: 35,
        lineHeight: 80,
        fontWeight: '700',
        fontFamily: 'raleway',
    },
    // custom thongBao
    btn_container_thongbao:{
        width: '100%',
        height: 70,
        backgroundColor: '#E4E4E4',
        borderRadius: 10,
        paddingStart: 14,
        paddingTop: 10,
    },
    txt_thongbao:{
        fontWeight: 'bold',
        fontSize: 14,
    },
    txt_thongbaoS:{
        fontSize: 10,
        paddingEnd: '10%',
        paddingTop:'1%',
    },
    // custom Recently viewed
    txt_tilte_rv: {
        fontSize: 21,
        lineHeight: 70,
        fontWeight: '700',
        fontFamily: 'raleway',
    }

});

