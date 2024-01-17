import {
  StyleSheet, Text, View, Image, TextInput,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'

const Start1 = () => {
  const [name, setName] = useState('');
  // state quản lý bắt lỗi
  const [isNameValid, setIsNameValid] = useState(true);

  const handleOnSubmit = () => {
    if (!name || name.length < 3) {
      setIsNameValid(false);
      return;
    }
    setIsNameValid(true);
    return;
  }
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require('../assets/shoppe.png')} />
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
      <View style={styles.loginContainer}>
        <Text style={styles.login}>I already have an account  </Text>
        <Image
          style={styles.ggImage}
          source={require('../assets/arrow-right-button.png')}
        />
      </View>

    </View>
  )
}
export default Start1
const styles = StyleSheet.create({

  ggImage: {
    position: 'absolute',
    right: 25, // Đặt giá trị right tại đây
    top: 19,
  },

  buttonGGLabel: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
    color: '#FFF',
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
  



  login: {
    fontSize: 19,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 33,
    textAlign: 'center',
    letterSpacing: 0.5,
    color: '#202020',
    padding:25,
  },
  loginContainer: {
    marginTop: 16,
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
    marginTop: 200,
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