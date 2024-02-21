import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

const Search = () => {
    const [historyData, setHistoryData] = useState(searchHistoryData);
    const [recomData, setRecomData] = useState(searchRecommendData);
    const [disData, setDisData] = useState(Product)
    const renderDiscover = ({ item }) => {
        const { id, infor, image, price } = item
        return (
            <TouchableOpacity style={styles.pressProduct}>
                <View>
                    <View style={styles.imageProContainer}>
                        <Image style={styles.imageProduct} source={image} />
                    </View>
                    <Text numberOfLines={2} style={styles.titleProduct}>{infor}</Text>
                </View>

                <Text style={styles.price}>$<Text>{price}</Text></Text>
            </TouchableOpacity>

        )
    };
    const renderitem = ({ item }) => {
        const { id, ten, date } = item;


        return (
            <TouchableOpacity style={styles.buttonHistory}><Text style={styles.textHistory}>{ten}</Text></TouchableOpacity>

        )
    }
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.shopHeader}>SEARCH</Text>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.searchText} placeholder='Search'>

                    </TextInput>
                    <TouchableOpacity><Image source={require('../../../../assets/image/camera.png')} /></TouchableOpacity>
                </View>


            </View>
            <View style={styles.body}>


                <View style={styles.headerBody}>
                    <Text style={styles.titleSearch}>Search History</Text>
                    <TouchableOpacity style={styles.deleteButton}><Image style={styles.deleteIcon} source={require('../../../../assets/image/Delete.png')} /></TouchableOpacity>
                </View>
                <View>
                    <FlatList

                        numColumns={3}
                        showsVerticalScrollIndicator={false}
                        horizontal={false}
                        style={styles.flatlistHistory}
                        data={historyData}
                        renderItem={renderitem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View >
                    <Text style={styles.titleSearch}>Recommendations</Text>
                    <FlatList

                        numColumns={3}
                        showsVerticalScrollIndicator={false}
                        horizontal={false}
                        style={styles.flatlistRecomen}
                        data={recomData}
                        renderItem={renderitem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <Text style={styles.discover}>Discover</Text>

                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    style={styles.flashListDiscover}
                    data={disData}
                    renderItem={renderDiscover}
                    keyExtractor={item => item.id}
                />

            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({

    discover:
    {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5
    },
    rowProduct:
    {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        flex: 1,
        backgroundColor: '#F4F4F4',
        flexDirection: 'column',
        marginBottom: 5,
        justifyContent: 'space-between',
        width: 180,
        height: 275,



    },
    flatlistRecomen:
    {
        marginTop: 13,


    },

    flatlistHistory:
    {

        marginBottom: 5,


    },
    textHistory:
    {
        textAlign: 'center',
        fontFamily: 'Raleway-Medium',

        color: 'black',
        fontSize: 17,
        lineHeight: 21
    },
    buttonHistory:
    {
        backgroundColor: '#ECECEC',
        borderRadius: 9,
        paddingHorizontal: 14,
        marginRight: 6,
        marginBottom: 6,
        paddingVertical: 6
    },

    deleteButton:
    {
        width: 36,
        height: 35,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECECEC',
    },
    deleteIcon:
    {
        width: 20,
        height: 20
    },
    titleSearch:
    {


        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Raleway-Medium'
    },
    headerBody:
    {

        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 10,
    },
    body:
    {
        flex: 1,


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
        alignSelf: 'center',
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
        textAlign: 'center',
        lineHeight: 36,

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
        paddingHorizontal: 13,
        paddingVertical: 20,
        flex: 1,
    },

})
const searchHistoryData = [
    { "id": 1, "ten": "Socks", "date": "2022-01-25T12:30:00" },
    { "id": 2, "ten": "Dressed", "date": "2022-01-25T12:30:00" },
    { "id": 3, "ten": "T-Shirt", "date": "2022-01-25T13:45:00" },
    { "id": 4, "ten": "Jeans", "date": "2022-01-25T14:30:00" },
    { "id": 5, "ten": "Sunglasses", "date": "2022-01-25T15:15:00" },
    { "id": 6, "ten": "Dress", "date": "2022-01-25T16:00:00" },
    { "id": 7, "ten": "Shoes", "date": "2022-01-25T17:30:00" },
    { "id": 8, "ten": "Hat", "date": "2022-01-25T18:45:00" },
    { "id": 9, "ten": "Jacket", "date": "2022-01-25T19:30:00" },





];
const searchRecommendData = [
    { "id": 1, "ten": "Socks", "date": "2022-01-25T12:30:00" },
    { "id": 2, "ten": "Dressed", "date": "2022-01-25T12:30:00" },
    { "id": 3, "ten": "T-Shirt", "date": "2022-01-25T13:45:00" },
    { "id": 4, "ten": "Jeans", "date": "2022-01-25T14:30:00" },
    { "id": 5, "ten": "Sunglasses", "date": "2022-01-25T15:15:00" },


];
const Product = [{
    "id": 1,
    "infor": "ShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtimeShowtime",
    "price": "5.05",
    "image": require("../../../../assets/image/tunic.png")
},
{
    "id": 2,
    "infor": "Sabrina",
    "price": "9.10",
    "image": require("../../../../assets/image/purpleDetail.png")
},
{
    "id": 3,
    "infor": "Little Bit of Heaven, A",
    "price": "9.07",
    "image": require("../../../../assets/image/shoe.png")
},
{
    "id": 4,
    "infor": "If You Could Only Cook",
    "price": "9.59",
    "image": require("../../../../assets/image/girl.png")
},


{
    "id": 5,
    "infor": "Royal Wedding",
    "price": "7.07",
    "image": require("../../../../assets/image/glass.png")
},

{
    "id": 6,
    "infor": "Big Stan",
    "price": "3.39",
    "image": require("../../../../assets/image/yellowDetail.png")
},
]



