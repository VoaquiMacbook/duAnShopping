import {
    View, Text,
    StyleSheet, Image,
    TouchableOpacity, ScrollView,
    SafeAreaView, FlatList
} from 'react-native'
import React, { useState } from 'react'

const Wishlist = () => {
    // dữ liệu mẫu testing
    const USERS = [{
        "id": 1,
        "name": "Sonsing",
        "email": "csturte0@barnesandnoble.com",
        "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423516596_1622755301798686_6688950499091215330_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=8SMr-0daZVIAX_rZc0A&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDDHy_KNaSkMApt3b8xR9EWoPEArHSz2bry7jtnSKqhdQ&oe=65BB58F8",
        "postion": "Research Associate",
        "rice": "$7.30"
    }, {
        "id": 2,
        "name": "Ronstring",
        "email": "lfeatherstone1@com.com",
        "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423538209_1622755318465351_1230407908410425052_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=aQit8qaysnsAX_o9W6T&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAoIKG07gguymuZeQaXvteGTrls7eKO8g9GGr1Yg7ZC_w&oe=65BB9AC8",
        "postion": "Administrative Assistant III",
        "rice": "$9.17"
    }, {
        "id": 3,
        "name": "Tempsoft",
        "email": "qpenright2@samsung.com",
        "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423557520_1622755321798684_1431897259310686444_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=LFO9cS_grUMAX-dvb7-&_nc_oc=AQkoKT9RyDjMnbUhlSrx55dWYheWUq7pFOVHvQqovGI_tIPHtZ7L17CQYPHE5Xs8QM8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDKLwm5xZWFfJ4TTIAbrL3MC2pChCz592SGAS6iRQgWHQ&oe=65BB2995",
        "postion": "Senior Sales Associate",
        "rice": "$5.74"
    }, {
        "id": 4,
        "name": "Zontrax",
        "email": "astirman3@ox.ac.uk",
        "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423515722_1622755395132010_8741546126443131823_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=FgWHg8ohtjEAX_PAVWK&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDXmSqpIQbMm1rqfkhiP1O8f11HIeHLyoK1F8fxjCi9aw&oe=65BA491B",
        "postion": "Librarian",
        "rice": "$0.34"
    }, {
        "id": 5,
        "name": "Span",
        "email": "dsterley4@wp.com",
        "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423584529_1622755408465342_7305113225419697574_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=EbgGg47ouDEAX9ojl2Y&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfC6_pRObxWAwp_MFCd0XdhepgGVBxi_bCoYAKECubwGuQ&oe=65BB58C5",
        "postion": "Product Engineer",
        "rice": "$8.99"
    }, {
        "id": 6,
        "name": "Fix San",
        "email": "nablott5@creativecommons.org",
        "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423516596_1622755301798686_6688950499091215330_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=8SMr-0daZVIAX_rZc0A&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDDHy_KNaSkMApt3b8xR9EWoPEArHSz2bry7jtnSKqhdQ&oe=65BB58F8",
        "postion": "Associate Professor",
        "rice": "$2.46"
    }, {
        "id": 7,
        "name": "Alpha",
        "email": "ppaeckmeyer6@ehow.com",
        "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423538209_1622755318465351_1230407908410425052_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=aQit8qaysnsAX_o9W6T&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAoIKG07gguymuZeQaXvteGTrls7eKO8g9GGr1Yg7ZC_w&oe=65BB9AC8",
        "postion": "Social Worker",
        "rice": "$7.22"
    }, {
        "id": 8,
        "name": "Tres-Zap",
        "email": "bdoddemeade7@usa.gov",
        "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423557520_1622755321798684_1431897259310686444_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=LFO9cS_grUMAX-dvb7-&_nc_oc=AQkoKT9RyDjMnbUhlSrx55dWYheWUq7pFOVHvQqovGI_tIPHtZ7L17CQYPHE5Xs8QM8&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDKLwm5xZWFfJ4TTIAbrL3MC2pChCz592SGAS6iRQgWHQ&oe=65BB2995",
        "postion": "Biostatistician II",
        "rice": "$3.04"
    }, {
        "id": 9,
        "name": "Subin",
        "email": "cducket8@ameblo.jp",
        "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423515722_1622755395132010_8741546126443131823_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=FgWHg8ohtjEAX_PAVWK&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDXmSqpIQbMm1rqfkhiP1O8f11HIeHLyoK1F8fxjCi9aw&oe=65BA491B",
        "postion": "Research Nurse",
        "rice": "$7.73"
    }, {
        "id": 10,
        "name": "Sonsing",
        "email": "gmalster9@macromedia.com",
        "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423584529_1622755408465342_7305113225419697574_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=EbgGg47ouDEAX9ojl2Y&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfC6_pRObxWAwp_MFCd0XdhepgGVBxi_bCoYAKECubwGuQ&oe=65BB58C5",
        "rice": "$3.27"
    }, {
        "id": 11,
        "name": "Tres-Zap",
        "email": "sandressa@qq.com",
        "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423516596_1622755301798686_6688950499091215330_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=8SMr-0daZVIAX_rZc0A&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDDHy_KNaSkMApt3b8xR9EWoPEArHSz2bry7jtnSKqhdQ&oe=65BB58F8",
        "postion": "Human Resources Manager",
        "rice": "$2.12"
    }, {
        "id": 12,
        "name": "Prodder",
        "email": "tcamoisb@scientificamerican.com",
        "photo": "http://dummyimage.com/226x100.png/cc0000/ffffff",
        "postion": "Human Resources Assistant II",
        "rice": "$7.07"
    }, {
        "id": 13,
        "name": "Daltfresh",
        "email": "jtrowlerc@msu.edu",
        "photo": "http://dummyimage.com/216x100.png/cc0000/ffffff",
        "postion": "Dental Hygienist",
        "rice": "$0.71"
    }, {
        "id": 14,
        "name": "Stim",
        "email": "deasund@guardian.co.uk",
        "photo": "http://dummyimage.com/136x100.png/dddddd/000000",
        "postion": "VP Sales",
        "rice": "$2.81"
    }, {
        "id": 15,
        "name": "Redhold",
        "email": "tleape@washington.edu",
        "photo": "http://dummyimage.com/233x100.png/ff4444/ffffff",
        "postion": "Compensation Analyst",
        "rice": "$9.50"
    }]
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <TouchableOpacity style={[styles.scv_imgContainer2]}>
                <Image
                    style={styles.avt_container}
                    source={{ uri: item.photo }} />
                <TouchableOpacity style={styles.btn_delete_wish}>
                    <Image source={require('../../../../assets/image/ic_delete_wish.png')} />
                </TouchableOpacity>
            </TouchableOpacity>
            <View style={styles.txt_container_item}>
                <Text style={styles.txt_item}>{item.postion}</Text>
                <Text style={styles.txt_itemM}>{item.rice}</Text>
                <View style={styles.horizontal}>
                    <View>
                        <TouchableOpacity style={styles.btn_or}>
                            <Text style={styles.btn_text_or}>Pink</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btn_or}>
                            <Text style={styles.btn_text_or}>M</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginHorizontal: '28%' }}>
                        <TouchableOpacity style={{ marginTop: 5 }}>
                            <Image style={{ width: 26, height: 21.5 }} source={require('../../../../assets/image/ic_Add_wish.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.txt_tilte}>Wishlist</Text>
            <View style={[styles.horizontal_seeall]}>
                <Text style={[styles.txt_newItems, styles.flex]}>Recently viewed</Text>
                <TouchableOpacity style={{ marginStart: 10, marginEnd: 5, shadowOpacity: 40, width: '10%' }}>
                    <Image source={require('../../../../assets/image/ic_seemess.png')}></Image>
                </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.scrollView}>
                <ScrollView
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../../../assets/image/img_Rv5.png')} /></TouchableOpacity>
                    <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../../../assets/image/img_Rv1.png')} /></TouchableOpacity>
                    <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../../../assets/image/img_Rv2.png')} /></TouchableOpacity>
                    <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../../../assets/image/img_Rv3.png')} /></TouchableOpacity>
                    <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../../../assets/image/img_Rv4.png')} /></TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
            <View>
                <FlatList
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={USERS}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

export default Wishlist
const styles = StyleSheet.create({
    // container
    container: {
        paddingStart: '4%',
        paddingEnd: '3%',
    },
    // custom tilte
    txt_tilte: {
        fontSize: 28,
        lineHeight: 60,
        fontFamily: 'Raleway-BoldItalic',
        color: 'black',
    },
    // cloumn, row
    vertical: {
        flexDirection: 'column',
    },
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    // flex
    flex: {
        flex: 1,
    },
    // custom see all
    txt_seeall: {
        fontStyle: 'italic',
        fontWeight: '500',
        fontSize: 16,
        paddingTop: '1%',
        color: 'black'
    },
    horizontal_seeall: {
        flexDirection: 'row',
    },
    txt_newItems: {
        fontSize: 21,
        color: 'black',
        fontFamily: 'Raleway-Bold',
    },
   // custom scrollView
   scrollView: {

   },
   text: {
       fontSize: 42,
   },
   scv_btn: {
       marginEnd: 10,
       elevation: 2,

   },
   scv_img: {
       width: 50,
       height: 50,
       borderRadius: 25,

   },
   scv_imgContainer: {
       backgroundColor: 'white',
       width: 60,
       height: 60,
       borderRadius: 100,
       justifyContent: 'center',
       paddingStart: '1.3%',

   },
   scv_imgContainer2: {
       backgroundColor: 'white',
       padding: 5,
       borderRadius: 5,
       elevation: 1,
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.3,
       shadowRadius: 4,
       shadowColor: '1px 3px 9px #F4AAB9',

   },
    // custom New Items
    avt_container: {
        borderRadius: 5,
        width: 121.18,
        height: 101.64,
    },
    item: {
        flexDirection: 'row',
      
        paddingTop: 10,
    },
    txt_item: {
        fontSize: 10,
        width: 100,
        height: 30,
        marginBottom: 10,
        color: 'black',
    },
    txt_itemM: {
        color: 'black',
        fontWeight: 'bold'
    },
    txt_container_item: {
        width: '80%',
        height: 50,

    },
    // custom whishlist
    btn_or: {
        backgroundColor: '#E5EBFC',
        height: 25,
        width: 50,
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 10,
        marginEnd: 5,
    },
    btn_text_or: {
        color: 'black',
        textAlign: 'center',
    },
    btn_delete_wish: {
        position: 'absolute',
        marginVertical: '48%',
        marginHorizontal: '8%',
    },
    scv_imgContainer2: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 5,
        elevation: 1,
        shadowOffset: { width: 20, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 20,
        shadowColor: '1px 3px 9px #F4AAB9',
        marginEnd: 10,
    
      },
})