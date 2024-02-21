import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
import Login from './Login';
import Acccount from './Acccount';
import Start1 from './Start1';
import Password from './Password';
import MainStackNavigation from '../main/MainStackNavigation';
import { NavigationContainer } from '@react-navigation/native';
const AuthenStackNavigation = () => {
  return (
  <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="start" component={Start1} />
        <Stack.Screen name="Account" component={Acccount} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={MainStackNavigation} />
        <Stack.Screen name="Pass" component={Password} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AuthenStackNavigation