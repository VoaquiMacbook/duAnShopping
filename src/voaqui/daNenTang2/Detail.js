import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React from 'react'

const Detail = ({ navigation, route }) => {
  
  const { data } = route.params;
  const { product } = data;

  const showData = () => {
    const itemData = {
      product_photo: product.photo,
      product_postion: product.postion,
    }
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.horizontal}>
        <View style={[styles.align_center, styles.horizontal]}>
          <TouchableOpacity style={{ marginEnd: 10 }} onPress={() => { navigation.navigate('HomePage') }}>
            <Image style={styles.img_avt} source={require('../../voaqui/daNenTang2/assets/image/Arrow.png')}></Image>
          </TouchableOpacity>
          <View style={[ styles.container_txt_postion]}>
            <Text style={styles.txt_postion}>{product.postion}</Text>
          </View>
          <View>
            <Image style={[styles.img_avt]} source={require('../../voaqui/daNenTang2/assets/image/MoreSquare.png')}></Image>
          </View>
        </View>
      </View>
      <View style={styles.container_img}>
        <Image source={{ uri: product.photo }} style={styles.image} />
      </View>
     
      <Text style={styles.txt_tiltie}>{product.postion}</Text>
     
       



    </ScrollView>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 50,
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
    width: '100%',
    alignItems: 'center'
  },
  // flex
  flex: {
    flex: 1,
  },
  img_avt: {
    width: 24,
    height: 24,
  },
  container_img: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 28,
  },
  image: {
    width: 260,
    height: 260,
    resizeMode: 'stretch',
  },
  container_txt_postion: {
    width: 222,
    height: 24,
    flexShrink: 0,
    marginEnd:16
  },
  txt_postion: {
    fontSize: 16,
    color: '#9292A3',
    textAlign: 'center'
  },
  txt_tiltie:{
    fontSize:20,
    shadowColor:'#010104',
    shadowOpacity:0.5,
    fontFamily:'Raleway-Black',
    marginStart:20,
    width:287,
    height:30,
  },

})