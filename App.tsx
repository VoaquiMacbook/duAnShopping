import React from 'react';
import type { PropsWithChildren } from 'react';
import Detail from './src/apps/main/stacks/Detail';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import Shop from './src/an/Shop';
import FlashSale from './src/an/FlashSale';
import Start1 from './src/apps/main/stacks/authen/Start1';
import Password from './src/apps/main/stacks/authen/Password';
import Login from './src/apps/main/stacks/authen/Login';
import Acccount from './src/apps/main/stacks/authen/Acccount';
function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{flex:1}}>
    <Password></Password>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
