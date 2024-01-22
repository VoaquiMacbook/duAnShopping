import React from 'react';

import {
  SafeAreaView,

  StatusBar,

  Text,

  View,
} from 'react-native';
import Acccount from './src/Acccount';
import Start1 from './src/Start1';
function App(): React.JSX.Element {

  return (
    <SafeAreaView >
      <StatusBar />
      <View>

      </View>
<Acccount></Acccount>
{/* <Start1></Start1> */}


    </SafeAreaView>
  );
}



export default App;