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
import FlashMessage from "react-native-flash-message";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect, useState } from "react";

const App = () => {
  const Stack = createNativeStackNavigator();

  const [userInfo, setUserInfo] = useState(null);

  // Prompt to start sign-in functionality
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: 'your_ios_client_id',
    androidClientId: 'your_android_client_id',
  });

  useEffect(() => {
    WebBrowser.maybeCompleteAuthSession();

    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);

      // Handling signInWithCredential as an async operation
      signInWithCredential(auth, credential)
        console.log("called")
    }
  }, [response]);

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
