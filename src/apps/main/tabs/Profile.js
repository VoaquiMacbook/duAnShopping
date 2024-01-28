import {
  View, Text,
  StyleSheet, Image,
  TouchableOpacity, ScrollView,
  SafeAreaView, FlatList
} from 'react-native'
import React from 'react'
const Profile = () => {
   
  // dữ liệu mẫu testing
  const USERS = [{
      "id": 1,
      "name": "Sonsing",
      "email": "csturte0@barnesandnoble.com",
      "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423538209_1622755318465351_1230407908410425052_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=aQit8qaysnsAX_o9W6T&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAoIKG07gguymuZeQaXvteGTrls7eKO8g9GGr1Yg7ZC_w&oe=65BB9AC8",
      "postion": "Research Associate",
      "rice": "$7.30"
  }, {
      "id": 2,
      "name": "Ronstring",
      "email": "lfeatherstone1@com.com",
      "photo":"https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423480138_1622771141797102_8678712648772560882_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=B7-TEvqJLDoAX8uqEXU&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfC1YpvPxJk90zvBYmL8TnxCxoYzNLZGVMt43oW0Am_tMQ&oe=65BB1C20",
      "postion": "Administrative Assistant III",
      "rice": "$9.17"
  }, {
      "id": 3,
      "name": "Tempsoft",
      "email": "qpenright2@samsung.com",
      "photo": "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/423515545_1622771661797050_8968651052926042399_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=41hYz56AmeIAX_ZA1x0&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAIBLLCDNGF4v5Dp2ZWPrL1KDsVam3ywZX1N4T03RIfZQ&oe=65BA66CC",
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
}]
  
  

  const renderItem = ({ item }) => (
      <View style={styles.item}>
          <View >
          <TouchableOpacity style={[ styles.scv_imgContainer2]}>
          <Image
                  style={styles.avt_container}
                  source={{ uri: item.photo }}/>
          </TouchableOpacity>
            
          </View>
          <View style={styles.txt_container_item}>
              <Text style={styles.txt_item} >{item.name}</Text>
              <Text style={styles.txt_item}>{item.postion}</Text>
          </View>

          <Text style={styles.txt_itemM}>{item.rice}</Text>


      </View>
  );
  return (
      <View style={styles.container}>
          <View style={styles.vertical}>
              <View style={[styles.horizontal]}>
                  <TouchableOpacity style={[styles.img_avt, styles.btn_avt]}>
                      <Image style={styles.img_avt} source={require('../../../../assets/image/img_avt.png')}></Image>
                  </TouchableOpacity>
                  <View style={styles.flex}>
                      <TouchableOpacity style={styles.btn_container}>
                          <Text style={styles.txt_myActivity}>My Activity</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={[styles.horizontal]}>
                      <View>
                          <TouchableOpacity style={styles.btn_icon}>
                              <Image style={styles.cs_icon} source={require('../../../../assets/image/ic_vouchers.png')}></Image>
                          </TouchableOpacity>
                      </View>
                      <View>
                          <TouchableOpacity style={styles.btn_icon}>
                              <Image style={styles.cs_icon_mess} source={require('../../../../assets/image/ic_mess.png')}></Image>
                          </TouchableOpacity>
                      </View>
                      <View>
                          <TouchableOpacity style={styles.btn_icon}>
                              <Image style={styles.cs_icon_setting} source={require('../../../../assets/image/ic_setting.png')}></Image>
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
                          <TouchableOpacity style={styles.btn_seeall}>
                              <Image source={require('../../../../assets/image/ic_seemess.png')}></Image>
                          </TouchableOpacity>
                      </View>
                  </TouchableOpacity>
              </View>
              <View>
                  <Text style={styles.txt_tilte_rv}>Recently viewed</Text>
              </View>

              <SafeAreaView style={styles.container}>
                  <ScrollView
                      horizontal={true}
                      showsVerticalScrollIndicator={false}
                      showsHorizontalScrollIndicator={false}
                      style={styles.scrollView}>
                      <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../../../assets/image/img_Rv5.png')} /></TouchableOpacity>
                      <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../../../assets/image/img_Rv1.png')} /></TouchableOpacity>
                      <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../../../assets/image/img_Rv2.png')} /></TouchableOpacity>
                      <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../../../assets/image/img_Rv3.png')} /></TouchableOpacity>
                      <TouchableOpacity style={[styles.scv_btn, styles.scv_imgContainer]}><Image style={styles.scv_img} source={require('../../../../assets/image/img_Rv4.png')} /></TouchableOpacity>
                  </ScrollView>
              </SafeAreaView>
              <Text style={styles.txt_or}>My Orders</Text>
              <View style={[styles.horizontal]}>
                  <View style={{ width: '25%' }}>
                      <TouchableOpacity style={styles.btn_or}>
                          <Text style={styles.btn_text_or}>To Pay</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.flex}>
                      <TouchableOpacity style={styles.btn_or}>
                          <Text style={styles.btn_text_or}>To Recieve</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.flex}>
                      <TouchableOpacity style={styles.btn_or}>
                          <Text style={styles.btn_text_or}>To Review</Text>
                      </TouchableOpacity>
                  </View>
              </View>
              <View style={[styles.horizontal_seeall]}>
                  <Text style={[styles.txt_newItems, styles.flex]}>New Items</Text>
                  <Text style={styles.txt_seeall}>See All</Text>
                  <TouchableOpacity style={styles.btn_seeall}>
                      <Image source={require('../../../../assets/image/ic_seemess.png')}></Image>
                  </TouchableOpacity>
              </View>
              <View>
                  <FlatList
                      horizontal={true}
                      showsVerticalScrollIndicator={false}
                      showsHorizontalScrollIndicator={false}
                      data={USERS}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={renderItem}
                  />
              </View>
          </View>

      </View>
  )
}

export default Profile
const styles = StyleSheet.create({
  // container
  container: {
      paddingStart: '3%',
      paddingEnd: '3%',
      marginTop:'5%'
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
      paddingStart: '1.4%',
      elevation: 2,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      shadowColor: '1px 2px 9px #F4AAB9',
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
      height: 33,
      borderRadius: 20,
      justifyContent: 'center',
      marginVertical: '6%',
  },
  txt_myActivity: {
      color: 'white',
      textAlign: 'center',
  },
  // custom icon
  btn_icon: {
      backgroundColor: '#F4F4F4',
      width: 30,
      height: 30,
      borderRadius: 25,
      marginStart: 15,
      justifyContent: 'center',
      marginVertical: '25%',
      elevation: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowColor: '1px 2px 9px #F4AAB9',
  },
  cs_icon: {
      width: 13,
      height: 13,
      marginStart: '30%'

  },
  cs_icon_mess: {
      width: 13,
      height: 8,
      marginStart: '28%'
  },
  cs_icon_setting: {
      width: 35,
      height: 35,
      marginStart: '8%'
  },
  // custom tilte
  txt_tilte: {
      fontSize: 28,
      lineHeight: 80,
      fontWeight: '700',
      fontFamily: 'raleway',
      color:'#202020',
  },
  // custom thongBao
  btn_container_thongbao: {
      width: '100%',
      height: 70,
      backgroundColor: '#F4F4F4',
      borderRadius: 10,
      paddingStart: 14,
      paddingTop:'1%',
      shadowOpacity:0.1,
  },
  txt_thongbao: {
      fontWeight: 'bold',
      fontSize: 14,
      color:'black',
  },
  txt_thongbaoS: {
      fontSize: 10,
      paddingEnd: '10%',
      paddingTop: '1%',
      color:'black',
  },
  // custom Recently viewed
  txt_tilte_rv: {
      fontSize: 21,
      lineHeight: 60,
      fontWeight: '700',
      fontFamily: 'raleway',
      color:'black',
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
      paddingStart: '1%',
    
  },
  scv_imgContainer2:{
    backgroundColor: 'white',
    padding:7,
    borderRadius: 5,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowColor: '1px 3px 9px #F4AAB9',
   
  },
  // custom MyOrder
  txt_or: {
      fontWeight: 'bold',
      fontSize: 20, marginTop: '5%',
      color:'black',
  },
  btn_or: {
      backgroundColor: '#E5EBFC',
      height: 35,
      borderRadius: 20,
      justifyContent: 'center',
      marginVertical: '4%',
      marginEnd: 15,
      marginTop: 10,
  },
  btn_text_or: {
      color: '#0042E0',
      textAlign: 'center',
  },
  // custom see all
  txt_seeall: {
      fontStyle: 'italic',
      fontWeight: '500',
      fontSize: 16,
      paddingTop: '1%',
      color:'black'
  },
  horizontal_seeall: {
      flexDirection: 'row',
      marginTop: 20,
  },
  txt_newItems: {
      fontWeight: '700',
      fontSize: 20,
      color:'black'
  },
  btn_seeall:{
    marginStart: 10,  
    shadowOpacity:0.3,
    shadowRadius:100, 
    width:'10%',
    marginEnd:'3%',
    
  },
  // custom New Items
  avt_container: {
      borderRadius: 5,
      width: 130,
      height: 130,
  },
  item: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: 3,
      paddingTop:10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
  },
  txt_item:{
      fontSize: 10, 
      width: 100, 
      textAlign: 'center', 
      color:'black',
  },
  txt_itemM:{
      color:'black', 
      fontFamily:'Raleway-BoldItalic',
  },
  txt_container_item:{
      width: '80%', 
      alignItems: 'center', 
      height: 50,
  }
  


});

