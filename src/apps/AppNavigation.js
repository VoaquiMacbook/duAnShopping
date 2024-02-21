import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigation from './main/MainStackNavigation'



const AppNavigation = () => {
   
    return (
        <NavigationContainer>
            
                <MainStackNavigation/>
                 
               
               
            
        </NavigationContainer>
    )
}

export default AppNavigation