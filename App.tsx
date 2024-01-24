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

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{flex:1}}>
     <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
