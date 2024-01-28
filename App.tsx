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
import Dropdown from './src/apps/authen/Dropdown';
// import voaqui
import Profile from './src/apps/main/tabs/Profile';
import Wishlist from './src/apps/main/tabs/Wishlist';



function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{flex:1}}>
    <Acccount/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
