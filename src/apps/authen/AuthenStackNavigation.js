import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Login from './Login';
import Password from './Password';

const AuthenStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Password} />
    </Stack.Navigator>
  )
}

export default AuthenStackNavigation