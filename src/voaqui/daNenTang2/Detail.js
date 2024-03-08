import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React from 'react'

const Detail = ({ navigation, route }) => {
  // const { navigation } = props;
  const { data } = route.params;
  const { product } = data;

  const showData = () => {
    const itemData = {
      product_photo: product.photo,
    }
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.container_img}>
        <Image source={{ uri: product.photo }} style={styles.image} />
      </View>
      

    </ScrollView>
  )
}

export default Detail

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding:50
  },
  container_img:{
    alignItems:'center',
  },
  image: {
    width: 260,
    height: 260,
    resizeMode: 'stretch',
  },

})