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

// import voaqui
import Profile from './src/apps/main/tabs/Profile';



function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{flex:1}}>
      <Profile/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
