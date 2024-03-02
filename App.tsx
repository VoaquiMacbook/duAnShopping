import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './src/Login';
import Menu from './src/Menu';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
        {/* <Login/> */}
        <Menu/>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
