import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Detail = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require('../../../assets/image/productDetail.png')} />
            </View>
            <View style={styles.body}>

                <View style={styles.priceAnd}>
<Text style={styles.price}>$<Text>17.00</Text></Text>
<TouchableOpacity><Image/></TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    price:
    {
        color:'black',
        fontSize:26,
        lineHeight:31,
        fontWeight:'bold'
    },
    body: {
        flexDirection: 'column',
        flex: 5,
        backgroundColor: 'white'
    },
    headerImage:
    {
        flex: 1,
        width: '100%'
    },
    header:
    {
        flex: 5
    },
    container:
    {
        flex: 1,
    }
})