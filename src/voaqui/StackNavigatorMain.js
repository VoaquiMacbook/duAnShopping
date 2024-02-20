import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Setting from '../apps/main/tabs/Setting'
import Profile from '../apps/main/tabs/Profile';
const Stack = createNativeStackNavigator()

const Screen1 = (props) => {
 return(
 <View> 
 <Text>hello</Text>
 </View>
 )
}
const StackNavigatorMain = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='Profile' 
    screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} /> */}
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default StackNavigatorMain

const styles = StyleSheet.create({})