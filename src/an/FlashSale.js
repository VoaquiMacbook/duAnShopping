import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FlashSale = () => {
    return (
        <View style={styles.container}>
             <View style={styles.bubbleContainer}>
                <Image source={require('../assets/image/Bubbles.png')} />
            </View>

           

           <View style={styles.header}>
           <View>
    <Text>Flash Sale</Text>
   
</View>
           <View style={styles.saleTimeContainer}>

<View >
    <Image style={{ width: 17, height: 20,marginRight:10 }} source={require('../assets/image/clock.png')} />
</View>

<View style={styles.centerItemSale}>
    <Text style={styles.textClock}>
        0
        <Text>
            0
        </Text >
    </Text>

</View>
<View style={styles.centerItemSale}>
    <Text style={styles.textClock}>
        3
        <Text>
            6
        </Text>
    </Text>

</View >
<View style={styles.centerItemSale}>
    <Text  style={styles.textClock}>
        5
        <Text>
            8
        </Text>
    </Text>

</View>
</View>
           </View>

        </View>
    )
}

export default FlashSale

const styles = StyleSheet.create({
    textClock:
    {
        color: '#202020',
        fontSize: 17,
        fontFamily: 'Raleway',
        fontWeight: '700',
        lineHeight: 21,
      
    },
 
    centerItemSale:
    {
        marginRight:2,
        borderRadius:7,
        width: 30,
        height:27,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent: 'center',


    },
    saleTimeContainer:
    {
        
        justifyContent: 'center', 
        alignItems: 'center',
        
        alignSelf: 'flex-end',
        display: 'flex',
        flexDirection: 'row',
        width: 121,
      
        height: 27
    },

    bubbleContainer:
    {
        zIndex: -1,
        position: 'absolute',
        right: 0
    },
    header:
    {
        marginTop: 39, 
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    container:
    {
        padding: 20,
        width: '100%',
        height: '100%'
    }

})