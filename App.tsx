import React from 'react';

import {
  SafeAreaView,

  ScrollView,

  StatusBar,

  Text,

  View,
} from 'react-native';
import Acccount from './src/Acccount';
import Start1 from './src/Start1';
import Login from './src/Login';
import Password from './src/Password';
import Password_1 from './src/Password_1';
import Password_recovery from './src/Password_recovery';
function App(): React.JSX.Element {

  return (
    <SafeAreaView >
      <StatusBar />
     
      <View>

      </View>
<Password_recovery></Password_recovery>
      {/* <Password_1></Password_1> */}
      {/* <Login></Login> */}
{/* <Acccount></Acccount> */}
{/* <Start1></Start1> */}


    </SafeAreaView>
  );
}



export default App;