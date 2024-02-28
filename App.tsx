import React from 'react';
import type { PropsWithChildren } from 'react';
import Detail from './src/apps/main/stacks/Detail';
import Home from './src/apps/main/tabs/Home';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import Shop from './src/apps/main/tabs/Home';
import FlashSale from './src/an/FlashSale';
import Start1 from './src/apps/authen/Start1';
import Password from './src/apps/authen/Password';
import Login from './src/apps/authen/Login';
import Acccount from './src/apps/authen/Acccount';
import Search from './src/apps/main/stacks/Search';
import Dropdown from './src/apps/authen/Dropdown';
// import voaqui
import Profile from './src/apps/main/tabs/Profile';
import Wishlist from './src/apps/main/tabs/Wishlist';
import Cart from './src/apps/main/tabs/Cart';
import Setting from './src/apps/main/tabs/Setting';
import StackNavigatorMain from './src/voaqui/StackNavigatorMain';
import AppNavigation from './src/apps/AppNavigation';
import AuthenStackNavigation from './src/apps/authen/AuthenStackNavigation';
// import kiemTra JsNangCao
import JsNangcao_kt_01 from './src/voaqui/data_JsNangCao/JsNangcao_kt_01';
import The_Function from './src/voaqui/data_JsNangCao/The_Function';
import The_Object_Arr from './src/voaqui/data_JsNangCao/The_Object_Arr';
import Kt01_JsNangCao from './src/voaqui/data_JsNangCao/Kt01_JsNangCao';
function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {/* <Cart /> */}
      {/* <Profile/> */}
      {/* <Wishlist/> */}
      {/* <Setting /> */}
      {/* <AuthenStackNavigation /> */}
      {/* <JsNangcao_kt_01/> */}
      {/* <The_Function/> */}
      {/* <The_Object_Arr/> */}
      <Kt01_JsNangCao/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
