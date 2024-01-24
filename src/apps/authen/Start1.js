import {
  StyleSheet, Text, View, Image, TextInput,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'

const Start1 = () => {

  return (
    <View style={styles.container}>
      <View style={styles.buttonimg}>
        {/* <Image 
        
        source={require('../assets/bubble01.png')}
        />
      </View>
      <View style={[styles.buttonimg,{zIndex:-1}]}>
        <Image 
        
        source={require('../assets/bubble02.png')}
        /> */}
      </View>
      <View style={styles.vongtron}>
        <Image
          style={styles.logo}
          source={require('../../../../../assets/image/Shoppe.png')} />
      </View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcome}>Shoppe </Text>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.login}>Beautiful eCommerce UI Kit for your online store</Text>
      </View>



      <View style={styles.buttonGGContainer}>
        <TouchableOpacity style={styles.buttonGG}>

          <Text style={styles.buttonGGLabel}>Let's get started</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginContainer1}>
        <Text style={styles.login1}>I already have an account  </Text>
        <Image
          style={styles.ggImage}
          source={require('../../../../../assets/image/ButtonStart.png')}
        />
      </View>

    </View>
  )
}
export default Start1
const styles = StyleSheet.create({


  buttonimg: {
    position: 'absolute',
    left: 0,
    top: 0
  },
  vongtron: {
    borderRadius: 80,
    borderWidth: 0.5,
    width: 150,
    height: 150,
    borderColor: 'gray',
    alignItems: 'center',
    padding: 5,
    paddingTop: 20,


  },
  ggImage: {

  },

  buttonGGLabel: {
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 31,
    letterSpacing: 0.5,
    color: '#F3F3F3',
  },
  buttonGG: {
    width: '100%',
    height: 57,
    backgroundColor: '#004CFF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGGContainer: {
    width: '100%',
    marginTop: 106,
  },
  buttonLabel: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
    color: '#fff',
  },
  button: {
    width: '100%',
    height: 57,
    backgroundColor: '#d17842',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 41
  },


  login1: {
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 33,
    textAlign: 'center',
    letterSpacing: 0.5,
    color: '#202020',

  },
  loginContainer1: {

    width: '100%',

    paddingTop: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 1,
    flexDirection: 'row',

  },

  login: {
    fontSize: 19,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 33,
    textAlign: 'center',
    letterSpacing: 0.5,
    color: '#202020',

  },
  loginContainer: {
    marginTop: 16,
    padding: 43,
  },
  welcomeContainer: {
    marginTop: 1,
  },
  welcome: {
    fontSize: 52,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 52, // Sửa giá trị lineHeight tại đây
    letterSpacing: 0.5,
    color: '#202020',
    marginTop: 45,
  },




  logo: {
    width: 82,
    height: 92,


  },

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 17
  }
})