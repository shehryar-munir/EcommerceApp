import React from 'react'
import Login from '@/Containers/Login'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '@/Containers/SplashScreen'
import Home from '@/Containers/Home'

const Stack = createStackNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'SplashScreen'} headerMode={'none'}>
      <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Home'} component={Home} />
    </Stack.Navigator>
  )
}

export default MainNavigator

