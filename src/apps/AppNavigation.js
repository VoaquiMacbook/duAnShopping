import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigation from './main/MainStackNavigation'
import AuthenStackNavigation from './authen/AuthenStackNavigation'


const AppNavigation = () => {
   
    return (
        <NavigationContainer>
            
                <MainStackNavigation/>
                 
               
               
            
        </NavigationContainer>
    )
}

export default AppNavigation