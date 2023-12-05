import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, Item, OnBoardingScreen,ItemScreen } from './screens';
import FlashMessage from 'react-native-flash-message';


const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
     
    <Stack.Navigator screenOptions={{headerShown:false}} >
      
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ItemScreen" component={ItemScreen} />
      <Stack.Screen name="Item" component={Item} />
      
    </Stack.Navigator>
   
  </NavigationContainer>
  )
}

export default App