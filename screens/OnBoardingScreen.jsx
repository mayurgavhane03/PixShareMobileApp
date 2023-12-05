import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { BG } from "../assets";
import {useNavigation} from "@react-navigation/native"
import { Entypo } from '@expo/vector-icons';



const OnBoardingScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-[#04020d] relative ">
      <Image source={BG} className="  w-full h-full object-cover  " />

      <SafeAreaView className="absolute z-10 inset-0 flex items-center justify-start">
        <View className="w-full flex px-4 pt-44">
          <Text className="text-xl text-[#f6e8e1]">Mobile</Text>
          <Text className="text-[50px] text-white tracking-wider font-bold ">
            4K WallPaper
          </Text>
          
          
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
          className=" w-full px-16 mt-[300px] "
        >
          <View className="w-full bg-[#E1a334] p-4 flex-row items-center justify-center rounded-full ">
            <Text>Get Started</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default OnBoardingScreen;
