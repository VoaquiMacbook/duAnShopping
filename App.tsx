import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import AppNavigation from './src/app/AppNavigation';
import { AppProvider } from './src/app/main/AppContext';
// import kiemTra JsNangCao
import JsNangcao_kt_01 from './src/voaqui/data_JsNangCao/JsNangcao_kt_01';
import The_Function from './src/voaqui/data_JsNangCao/The_Function';
import The_Object_Arr from './src/voaqui/data_JsNangCao/The_Object_Arr';
import Kt01_JsNangCao from './src/voaqui/data_JsNangCao/Kt01_JsNangCao';
import Giai_De2 from './src/voaqui/data_JsNangCao/De_JsNangCao/Giai_De2';
import Thi from './src/voaqui/data_JsNangCao/Thi/Thi';
import C3 from './src/voaqui/data_JsNangCao/Thi/C3';
import C4 from './src/voaqui/data_JsNangCao/Thi/C4';
import C5 from './src/voaqui/data_JsNangCao/Thi/C5';
import C6 from './src/voaqui/data_JsNangCao/Thi/C6';
import C7 from './src/voaqui/data_JsNangCao/Thi/C7';
import C8 from './src/voaqui/data_JsNangCao/Thi/C8';
// react 2
import HomePage from './src/voaqui/daNenTang2/HomePage';
import Register from './src/voaqui/daNenTang2/Test_React2';
import Login from './src/app/authen/Login';
import Detail from './src/voaqui/daNenTang2/Detail';
import AuthenStackNavigation from './src/voaqui/daNenTang2/authen/AuthenStackNavigation';

import Home from './src/Screens/Home';
import ChooseLocation from './src/Screens/ChooseLocation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import FlashMessage from 'react-native-flash-message';

function App(): React.JSX.Element {
  const Stack = createStackNavigator()

  return (
    // <AppProvider>
    //   <SafeAreaView style={styles.container}>
    //     <StatusBar />
    //     {/* <AppNavigation /> */}
      
    //   </SafeAreaView>
    // </AppProvider>

  //   <AppProvider>
  //   <SafeAreaView style={styles.container}>
  //     <StatusBar />
  //     {/* <AppNavigation /> */}
  //     {/* <HomePage/> */}
  //    {/* <Register/> */}
  //    <AuthenStackNavigation/>
  //    {/* <Detail/> */}
  //   </SafeAreaView>
  // </AppProvider>
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="chooseLocation" component={ChooseLocation} />
      </Stack.Navigator>
      {/* <FlashMessage
        position="top"
      /> */}
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
