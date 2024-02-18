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
        "photo": "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/428329969_1636024333805116_1559700001182853901_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Qyu_I3cbQygAX8OkSww&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfA3_jqUIT4k9IW3Q4F-5K2JiMfO3M751SXQSXAHEmUiHg&oe=65D70479",
        "postion": "Research Associate",
        "rice": "$7.30"
    }, {
        "id": 2,
        "name": "Ronstring",
        "email": "lfeatherstone1@com.com",
        "photo": "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/428409384_1635936827147200_5008196241783858298_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=GcH7ZDTtuMIAX99uOOr&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBE-xukDS4n19yTJ-d2qgGNhXeVPqqNzi7QYmgbL73siQ&oe=65D679FD",
        "postion": "Administrative Assistant III",
        "rice": "$9.17"
    }, {
        "id": 3,
        "name": "Tempsoft",
        "email": "qpenright2@samsung.com",
        "photo": "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/428336830_1636024337138449_5803983350826795139_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=pfWEqS7uG-cAX9jqUtP&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDsjpNRMlWsXVbACMpvVUsbBgzHwar-utj9vKvMJV4kLw&oe=65D6AEB3",
        "postion": "Senior Sales Associate",
        "rice": "$5.74"
    }, {
        "id": 4,
        "name": "Zontrax",
        "email": "astirman3@ox.ac.uk",
        "photo": "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/428457185_1635981313809418_3026649841359181726_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=pqMSR6HmjOcAX8xgUre&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfB6pSp5AXVICQLO7rp24UZseuqvL4zfrX7fXfZGd-_gqg&oe=65D6C2E5",
        "postion": "Librarian",
        "rice": "$0.34"
    }, {
        "id": 5,
        "name": "Span",
        "email": "dsterley4@wp.com",
        "photo": "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/428282041_1635981393809410_2758062445062834597_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=yQur5_SYAgUAX9Q28WV&_nc_oc=AQm5U5wTsjP4A9KcJJnEDWIkvtH8rJ8yBIdM9O4Mfc2YrkD43zaKRLjXn3pHaKjnFRQ&_nc_ht=scontent.fsgn2-10.fna&oh=00_AfASLC16HndgoXZGdPTE95CEedRtuWIrIiMhSCY79oD_CQ&oe=65D6CD4E",
        "postion": "Product Engineer",
        "rice": "$8.99"
    }, {
        "id": 6,
        "name": "Fix San",
        "email": "nablott5@creativecommons.org",
        "photo": "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/428401437_1635981317142751_1112247208910531385_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=YwyaedH-JWIAX90bc7a&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfC3cgU1_qsGEeRtJEhOtBuEtPyAGWUbID8vyenjHMV0EA&oe=65D61DF1",
        "postion": "Associate Professor",
        "rice": "$2.46"
    }, {
        "id": 7,
        "name": "Alpha",
        "email": "ppaeckmeyer6@ehow.com",
        "photo": "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/428358435_1635981320476084_3288892428397491297_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=D7j3KLe687cAX_5477n&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCxFU_QPSl1vEEr_k3oPg2EBOdIMYQGTAHG19A1yy_0OA&oe=65D7EB3B",
        "postion": "Social Worker",
        "rice": "$7.22"
    }, {
        "id": 8,
        "name": "Tres-Zap",
        "email": "bdoddemeade7@usa.gov",
        "photo": "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/428374566_1635941677146715_6652605961499572060_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=xvGg991KOSgAX_HiDGM&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDOHWPtvlyuEV2oY9oXe0kJGOaSYJxtirfWaq4h1yakmw&oe=65D68B4C",
        "postion": "Biostatistician II",
        "rice": "$3.04"
    }, {
        "id": 9,
        "name": "Subin",
        "email": "cducket8@ameblo.jp",
        "photo": "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/428277596_1635941687146714_8900359495859420354_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=ijQHmKzx7DgAX9ir27J&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDcmsrq9OjViY5qNkXFbPZzeO79eYppe0UGbcq_G6vLBw&oe=65D78A54",
        "postion": "Research Nurse",
        "rice": "$7.73"
    },{
        "id": 10,
        "name": "Sonsing",
        "email": "csturte0@barnesandnoble.com",
        "photo": "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/428329969_1636024333805116_1559700001182853901_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Qyu_I3cbQygAX8OkSww&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfA3_jqUIT4k9IW3Q4F-5K2JiMfO3M751SXQSXAHEmUiHg&oe=65D70479",
        "postion": "Research Associate",
        "rice": "$7.30"
    }, {
        "id": 11,
        "name": "Ronstring",
        "email": "lfeatherstone1@com.com",
        "photo": "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/428409384_1635936827147200_5008196241783858298_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=GcH7ZDTtuMIAX99uOOr&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBE-xukDS4n19yTJ-d2qgGNhXeVPqqNzi7QYmgbL73siQ&oe=65D679FD",
        "postion": "Administrative Assistant III",
        "rice": "$9.17"
    }, {
        "id": 12,
        "name": "Tempsoft",
        "email": "qpenright2@samsung.com",
        "photo": "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/428336830_1636024337138449_5803983350826795139_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=pfWEqS7uG-cAX9jqUtP&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDsjpNRMlWsXVbACMpvVUsbBgzHwar-utj9vKvMJV4kLw&oe=65D6AEB3",
        "postion": "Senior Sales Associate",
        "rice": "$5.74"
    }, {
        "id": 13,
        "name": "Zontrax",
        "email": "astirman3@ox.ac.uk",
        "photo": "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/428457185_1635981313809418_3026649841359181726_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=pqMSR6HmjOcAX8xgUre&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfB6pSp5AXVICQLO7rp24UZseuqvL4zfrX7fXfZGd-_gqg&oe=65D6C2E5",
        "postion": "Librarian",
        "rice": "$0.34"
    }, {
        "id": 14,
        "name": "Span",
        "email": "dsterley4@wp.com",
        "photo": "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/428282041_1635981393809410_2758062445062834597_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=yQur5_SYAgUAX9Q28WV&_nc_oc=AQm5U5wTsjP4A9KcJJnEDWIkvtH8rJ8yBIdM9O4Mfc2YrkD43zaKRLjXn3pHaKjnFRQ&_nc_ht=scontent.fsgn2-10.fna&oh=00_AfASLC16HndgoXZGdPTE95CEedRtuWIrIiMhSCY79oD_CQ&oe=65D6CD4E",
        "postion": "Product Engineer",
        "rice": "$8.99"
    }, {
        "id": 15,
        "name": "Fix San",
        "email": "nablott5@creativecommons.org",
        "photo": "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/428401437_1635981317142751_1112247208910531385_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=YwyaedH-JWIAX90bc7a&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfC3cgU1_qsGEeRtJEhOtBuEtPyAGWUbID8vyenjHMV0EA&oe=65D61DF1",
        "postion": "Associate Professor",
        "rice": "$2.46"
    }, {
        "id": 16,
        "name": "Alpha",
        "email": "ppaeckmeyer6@ehow.com",
        "photo": "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/428358435_1635981320476084_3288892428397491297_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=D7j3KLe687cAX_5477n&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCxFU_QPSl1vEEr_k3oPg2EBOdIMYQGTAHG19A1yy_0OA&oe=65D7EB3B",
        "postion": "Social Worker",
        "rice": "$7.22"
    }, {
        "id": 17,
        "name": "Tres-Zap",
        "email": "bdoddemeade7@usa.gov",
        "photo": "https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/428374566_1635941677146715_6652605961499572060_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=xvGg991KOSgAX_HiDGM&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDOHWPtvlyuEV2oY9oXe0kJGOaSYJxtirfWaq4h1yakmw&oe=65D68B4C",
        "postion": "Biostatistician II",
        "rice": "$3.04"
    }, {
        "id": 18,
        "name": "Subin",
        "email": "cducket8@ameblo.jp",
        "photo": "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/428277596_1635941687146714_8900359495859420354_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=ijQHmKzx7DgAX9ir27J&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDcmsrq9OjViY5qNkXFbPZzeO79eYppe0UGbcq_G6vLBw&oe=65D78A54",
        "postion": "Research Nurse",
        "rice": "$7.73"
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