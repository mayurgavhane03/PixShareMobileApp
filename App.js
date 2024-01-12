import { View, Text } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  Item,
  OnBoardingScreen,
  ItemScreen,
  LoginScreen,
} from "./screens";

import { useEffect, useState } from "react";

const App = () => {
  const Stack = createNativeStackNavigator();

  const [userInfo, setUserInfo] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="LoginScreen" promptAsync={promptAsync} component={LoginScreen} /> */}
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
        <Stack.Screen name="Item" component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
