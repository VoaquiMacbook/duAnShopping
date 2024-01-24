import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'

const Detail = () => {
    return (
        <ScrollView style={styles.container}>

            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.headerImage} source={require('../../../../assets/image/productDetail.png')} />
                </View>
                <View style={styles.body}>

                    <View style={styles.priceAnd}>
                        <Text style={styles.price}>$<Text>17.00</Text></Text>
                        <TouchableOpacity style={styles.btnShare}><Image style={styles.shareImg} source={require('../../../../assets/image/shareIcon.png')} /></TouchableOpacity>

                    </View>


                    <View style={styles.detailProContainer}>
                        <Text style={styles.detailPro}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.
                        </Text>
                    </View>
                    <Text style={styles.title}>Color Options</Text>

                    <View style={styles.colorContainer}>
                        <View style={styles.colorItemContainer}>
                            <Image style={styles.colorItem} source={require('../../../../assets/image/pinkDetail.png')} />
                        </View>
                        <View style={styles.colorItemContainer}>
                            <Image style={styles.colorItem} source={require('../../../../assets/image/yellowDetail.png')} />
                        </View>
                        <View style={styles.colorItemContainer}>
                            <Image style={styles.colorItem} source={require('../../../../assets/image/redDetail.png')} />
                        </View>
                        <View style={styles.colorItemContainer}>
                            <Image style={styles.colorItem} source={require('../../../../assets/image/purpleDetail.png')} />
                        </View>

                    </View>


                    <Text style={styles.title}>Size</Text>
                    <View style={styles.sizeContainer}>
                        <TouchableOpacity style={styles.btnSize}>
                            <Text style={styles.textSize}>S</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSizeChoose}>
                            <Text style={styles.textSize}>M</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSize}>
                            <Text style={styles.textSize}>L</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSize}>
                            <Text style={styles.textSize}>XL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSizeDiable}>
                            <Text style={styles.textSizeDiable}>XXL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSizeDiable}>
                            <Text style={styles.textSizeDiable}>XXL</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.quantilyContainer}>
                        <Text style={styles.titleQuantily}>Quantily</Text>
                       <View style={styles.plusDecre}>
                       <TouchableOpacity style={styles.btnValue}><Image source={require('../../../../assets/image/minus.png')} /></TouchableOpacity>
                        <View style><TextInput /></View>
                        <TouchableOpacity style={styles.btnValue}><Image source={require('../../../../assets/image/incre.png')}  /></TouchableOpacity>
                       </View>
                    </View>
                </View>
            </View>



        </ScrollView>

    )
}

export default Detail

const styles = StyleSheet.create({
    plusDecre:
    {
        flexDirection:'row'
    },
    titleQuantily:
    {
        fontFamily: 'Raleway-Bold',
        fontSize: 17,
        lineHeight: 21,
       
        color: 'black',


    },
    btnValue:
    {
        width:48,
        height:48,
        borderRadius:24,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#004BFE'
    },
    quantilyContainer:
    {
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection: 'row',
        marginTop: 14
    },
    textSizeDiable:
    {
        fontFamily: 'Raleway-Medium',
        color: '#BEC8E5',
        lineHeight: 18,
        fontSize: 14,

    },
    textSize:
    {
        fontFamily: 'Raleway-Medium',
        color: 'black',
        lineHeight: 18,
        fontSize: 14,

    },
    btnSize:
    {
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 25,

        backgroundColor: '#F9F9F9'
    },
    btnSizeDiable:
    {
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 25,

        backgroundColor: '#E5EBFC'
    },
    btnSizeChoose:
    {
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 25,
        borderWidth: 1,
        borderColor: '#004CFF',
        backgroundColor: '#E5EBFC'
    },
    sizeContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    colorItem:
    {
        flex: 1,
        width: '100%',
        borderRadius: 5,
    },
    colorItemContainer: {
        width: 80,
        height: 70,


    },
    colorContainer:
    {
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title:
    {
        fontFamily: 'Raleway-Bold',
        fontSize: 17,
        lineHeight: 21,
        marginBottom: 14,
        color: 'black',


    },
    detailPro:
    {
        color: 'black',
        fontSize: 15,
        lineHeight: 21,
    },
    detailProContainer:
    {
        marginVertical: 14
    },
    shareImg:
    {

        alignSelf: 'center'
    },
    btnShare:
    {
        paddingTop: 4,
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#FFEBEB'
    },
    price:
    {
        fontFamily: 'Raleway-ExtraBold',
        color: 'black',
        fontSize: 26,
        lineHeight: 31,

    },
    priceAnd:
    {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    body: {
        paddingVertical: 15,
        flexDirection: 'column',
        flex: 5,
        paddingHorizontal: 26,
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