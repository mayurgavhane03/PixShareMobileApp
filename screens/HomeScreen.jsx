import {
  View,
  Text,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import MasanoryLayout from "./MasanoryLayout";
import { useEffect } from "react";
import { getCategories } from "../sanity";






const HomeScreen = () => {
  const [catagories, setCategories] = useState();

useEffect(() => {
  getCategories().then((data) => setCategories(data))
  .catch((err) => alert (err))
},[])



// this is the dumy data

  const data = [
    {
      id: 1,
      name: "a",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/01/24/17/33/light-bulb-3104355_1280.jpg",
    },
    {
      id: 2,
      name: "b",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/04/29/14/32/make-the-day-great-4166221_1280.jpg",
    },
    {
      id: 3,
      name: "c",
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/08/23/08/05/triangles-6567058_1280.png",
    },
    {
      id: 4,
      name: "d",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/05/10/17/33/mental-2301393_1280.jpg",
    },
    {
      id: 5,
      name: "e",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/12/17/10/21/grass-1913167_1280.jpg",
    },
    {
      id: 6,
      name: "j",
      imageUrl:
        "https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_1280.jpg",
    },
  ];

  return (
    <SafeAreaView className="flex-1 items-center justify-center mt-6 bg-[#04020d] relative ">
      <SafeAreaView className="flex w-full h-full items-center justify-start gap-4 ">
        <View className="w-full px-6 flex-row items-center justify-between ">
          <Text className="text-2xl text-gray-500 font-semibold ">
            4K wallpapers
          </Text>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>
        {/* installing this  masnary layout */}
        <ScrollView className="w-full h-full px-4">
          {
            /* this show the loading effect  */
            catagories ? (
              <MasanoryLayout data={catagories} screen="ItemScreen"  />
            ) : (
              <>
                <ActivityIndicator color={"#ff0000"} size="large" />
              </>
            )
          }
        </ScrollView>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default HomeScreen;
