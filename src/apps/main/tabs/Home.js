import { StyleSheet, Text, View, TextInput,  Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
<Text style={styles.shopHeader}>SHOP</Text>
<View style={styles.searchContainer}>
   <TextInput style={styles.searchText} placeholder='Search'>

   </TextInput>
  <TouchableOpacity><Image source={ require('../../../../assets/image/camera.png')}/></TouchableOpacity> 
</View>

<View style={styles.typeContainer}>

</View>
     </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    typeContainer:
    {
        
    },
    searchText:
    {
        flex:1, 
        fontSize:14,
        lineHeight:21,
        color:'#202020',
        
    },
    searchContainer:
    {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:16,
        paddingRight:17,
        height:40,
        backgroundColor:'#EDEEF1',
        flex:1, 
        borderRadius:18
    },
    shopHeader:
    {
       marginRight:19,
        color:'#202020',
        lineHeight:36,
        fontWeight:'bold',
        fontSize:28
    },
    header:
    {
      
        alignItems:'center',
        marginTop:19,
       
        flexDirection:'row'
    },
    container:
    {
        flex:1,
        padding:20
    }
})