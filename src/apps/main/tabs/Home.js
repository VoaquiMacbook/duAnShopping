import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

const Home = () => {
    const [data, setdata] = useState(Product);
    const renderitem = ({ item }) => {
        const { id, infor, price, image } = item;
       
        return (
            <TouchableOpacity style={styles.pressProduct}>
                <View>
                    <View style={styles.imageProContainer}>
                        <Image style={styles.imageProduct} source={image} />
                    </View>
                    <Text numberOfLines={2} style={styles.titleProduct}>{infor} </Text>
                </View>

                <Text style={styles.price}>$<Text>{price}</Text></Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.shopHeader}>SHOP</Text>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.searchText} placeholder='Search'>

                    </TextInput>
                    <TouchableOpacity><Image source={require('../../../../assets/image/camera.png')} /></TouchableOpacity>
                </View>


            </View>
            <View style={styles.typeContainer}>

                <View style={styles.btnCate} >
                    <TouchableOpacity style={styles.btnContainer}>
                        <Image style={styles.iconImage} source={require('../../../../assets/image/dressedHome.png')} />

                    </TouchableOpacity>
                    <Text style={styles.textTilte}>Dressed</Text>
                </View>

                <View style={styles.btnCate} >
                    <TouchableOpacity style={styles.btnContainer}>
                        <Image style={styles.iconImage} source={require('../../../../assets/image/clockHome.png')} />

                    </TouchableOpacity>
                    <Text style={styles.textTilte}>Clock</Text>
                </View>
                <View style={styles.btnCate} >
                    <TouchableOpacity style={styles.btnContainer}>
                        <Image style={styles.iconImage} source={require('../../../../assets/image/skirts.png')} />

                    </TouchableOpacity>
                    <Text style={styles.textTilte}>Skirts</Text>
                </View>

                <View style={styles.btnCate} >
                    <TouchableOpacity style={styles.btnContainer}>
                        <Image style={styles.iconImage} source={require('../../../../assets/image/shortHome.png')} />

                    </TouchableOpacity>
                    <Text style={styles.textTilte}>Shorts</Text>
                </View>

                <View style={styles.btnCate} >
                    <TouchableOpacity style={styles.btnContainer}>
                        <Image style={styles.iconImage} source={require('../../../../assets/image/jacket.png')} />

                    </TouchableOpacity>
                    <Text style={styles.textTilte}>Jacket</Text>
                </View>

            </View>

            <View style={styles.typeContainer}>

                <View style={styles.btnCate} >
                    <TouchableOpacity style={styles.btnContainer}>
                        <Image style={styles.iconImage} source={require('../../../../assets/image/shoe.png')} />

                    </TouchableOpacity>
                    <Text style={styles.textTilte}>Shoes</Text>
                </View>

                <View style={styles.btnCate} >
                    <TouchableOpacity style={styles.btnContainer}>
                        <Image style={styles.iconImage} source={require('../../../../assets/image/glass.png')} />

                    </TouchableOpacity>
                    <Text style={styles.textTilte}>Glass</Text>
                </View>
                <View style={styles.btnCate} >
                    <TouchableOpacity style={styles.btnContainer}>
                        <Image style={styles.iconImage} source={require('../../../../assets/image/purpleDetail.png')} />

                    </TouchableOpacity>
                    <Text style={styles.textTilte}>Polo</Text>
                </View>
                <View style={styles.btnCate} >
                    <TouchableOpacity style={styles.btnContainer}>
                        <Image style={styles.iconImage} source={require('../../../../assets/image/tunic.png')} />

                    </TouchableOpacity>
                    <Text style={styles.textTilte}>T-shitrts</Text>
                </View>
                <View style={styles.btnCate} >
                    <TouchableOpacity style={styles.btnContainer}>
                        <Image style={styles.iconImage} source={require('../../../../assets/image/girl.png')} />

                    </TouchableOpacity>
                    <Text style={styles.textTilte}>Tunic</Text>
                </View>
            </View>
            <View style={styles.titleAllItem}>
                <Text style={styles.tilteTextAll}>ALL ITEMS</Text>
                <TouchableOpacity>
                    <Image source={require('../../../../assets/image/filter.png')} />
                </TouchableOpacity>
            </View>



            <FlatList

                numColumns={2}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                style={styles.flatlistProduct}
                data={data}
                columnWrapperStyle={styles.rowProduct}
                renderItem={renderitem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    rowProduct:
    {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flatlistProduct:
    {
        flex: 1,

    },
    price:
    {
        fontFamily: 'Raleway-Bold',
        color: 'black',
        marginBottom: 10,
        fontSize: 17,



        lineHeight: 25,

    },
    titleProduct:
    {

        fontSize: 12,

        lineHeight: 16,
        color: 'black',
        marginTop: 6,

    },
    imageProduct:
    {
        width: 170,
        height: 197,
        borderRadius: 9,
    },
    imageProContainer:
    {
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowColor: '1px 2px 9px #F4AAB9',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        width: '100%',
        height: 206,
        borderRadius: 9,

    },
    pressProduct:
    {

        flexDirection: 'column',
        marginBottom: 5,
        justifyContent: 'space-between',
        width: 180,
        height: 275,

    },

    tilteTextAll:
    {
        fontFamily: 'Raleway-Bold',
        color: '#202020',
        fontSize: 21,
        lineHeight: 30,

    },
    titleAllItem:
    {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 9
    },
    textTilte:
    {
        fontFamily: 'Raleway-Medium',
        fontSize: 13,
        lineHeight: 17,
        color: 'black',
        marginTop: 9
    },
    iconImage:
    {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    btnContainer: {
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowColor: '1px 2px 9px #F4AAB9',
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 30,
        height: 60
    },
    btnCate:
    {
        flexDirection: 'column',
        alignItems: 'center'
    },
    typeContainer:
    {
        marginTop: 23,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    searchText:
    {
        flex: 1,
        fontSize: 14,
        lineHeight: 21,
        color: '#202020',

    },
    searchContainer:
    {
        flexDirection: 'row',
        alignSelf:'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 17,
        height: 40,
        backgroundColor: '#EDEEF1',
        flex: 1,
        borderRadius: 18,
       
    },
    shopHeader:
    {
        marginRight: 19,
        color: '#202020',
        textAlign:'center',
      lineHeight:36,
        
        fontWeight: 'bold',
        fontSize: 28
    },
    header:
    {

        alignItems: 'center',
        marginTop: 19,
      
        flexDirection: 'row'
    },
    container:
    {
        flexDirection: 'column',
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 13
    }
})
const Product = [{
    "id": 1,
    "infor": "ShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtime",
    "price": "5.05",
    "image": require("../../../../assets/image/tunic.png")},
     {
    "id": 2,
    "infor": "Sabrina",
    "price": "9.10",
    "image": require("../../../../assets/image/purpleDetail.png")},
     {
    "id": 3,
    "infor": "Little Bit of Heaven, A",
    "price": "9.07",
    "image": require("../../../../assets/image/shoe.png")},
     {
    "id": 4,
    "infor": "If You Could Only Cook",
    "price": "9.59",
    "image": require("../../../../assets/image/girl.png")},


{
    "id": 5,
    "infor": "Royal Wedding",
    "price": "7.07",
    "image": require("../../../../assets/image/glass.png")},

{
    "id": 6,
    "infor": "Big Stan",
    "price": "3.39",
    "image": require("../../../../assets/image/yellowDetail.png")},
]