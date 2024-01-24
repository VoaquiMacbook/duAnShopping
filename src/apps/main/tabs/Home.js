import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = () => {
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
                    <Image source={require('../../../../assets/image/filter.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    tilteTextAll:
    {
        fontFamily: 'Raleway-Bold',
        color:'#202020',
        fontSize: 21,
        lineHeight: 30,
        
    },
    titleAllItem:
    {
        marginTop:25,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
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
        marginTop: 13,
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 17,
        height: 40,
        backgroundColor: '#EDEEF1', 
        flex: 1,
        borderRadius: 18,
        marginBottom: 10
    },
    shopHeader:
    {
        marginRight: 19,
        color: '#202020',
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
        flexDirection: 'column',
        flex: 1,
        padding: 20
    }
})