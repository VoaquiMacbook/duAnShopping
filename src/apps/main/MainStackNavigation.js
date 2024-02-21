import React, { useContext } from 'react'
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList, ImageBackground } from 'react-native'
// tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './tabs/Home'
import Wishlist from './tabs/Wishlist'

import Cart from './tabs/Cart'

const Tab = createBottomTabNavigator();


const MainTabNavigation = (props) => {
    const { navigation } = props
    const goToSetting = () => {
        navigation.navigate('Setting')
    }
    const goToPeronal = () => {
        navigation.navigate('Personal')
    }
    return (
        <Tab.Navigator

            screenOptions={({ route, navigation }) => ({



                headerTitle: () => null,
                headerShown: false,
                tabBarStyle: { backgroundColor: '#ffff', borderTopWidth: 0 },
                tabBarIcon: ({ focused, color, size }) => {


                    if (route.name === 'Home') {
                        if (focused) {
                            return <Image source={require('../../../assets/image/shopblack.png')} />
                        }
                        return <Image source={require('../../../assets/image/shopblue.png')} />
                    } else if (route.name === 'History') {
                        if (focused) {
                            return <Image source={require('../../../assets/image/hahaha.png')} />
                        }
                        return <Image source={require('../../../assets/image/hahaha.png')} />
                    } else if (route.name === 'Favorite') {
                        if (focused) {
                            return <Image source={require('../../../assets/image/hahaha.png')} />
                        }
                        return <Image source={require('../../../assets/image/hahaha.png')} />
                    } else if (route.name === 'Cart') {
                        if (focused) {
                            return <Image source={require('../../../assets/image/hahaha.png')} />
                        }
                        return <Image source={require('../../../assets/image/hahaha.png')} />
                    }



                },
                tabBarShowLabel: false,

            })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="wish" component={Wishlist} />

            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

// stacks
import { createStackNavigator } from '@react-navigation/stack'
import Detail from './stacks/Detail'
import Setting from './tabs/Setting'

import Search from './stacks/Search'
import Profile from './tabs/Profile'

const Stack = createStackNavigator();

const MainStackNavigation = (props) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Setting" component={Setting} />

        </Stack.Navigator>
    )
}

export default MainStackNavigation
const styles = StyleSheet.create({
    avata:
    {
        width: 30,
        height: 30,
        borderRadius: 9,
        marginRight: 20,
    },
    settingHome:
    {
        width: 14,
        height: 14,
        borderRadius: 15
    },
    backgroundColorSettingicon:
    {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnSettingCon:
    {
        width: 30,
        height: 30,
        marginLeft: 20,
    }
})