
import React, { useEffect, useState } from "react";
import { getCategoryItemById } from "../sanity";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import MasanoryLayout from "./MasanoryLayout";
const ItemScreen = ({ route }) => {
  //default and our param
  const id = route?.params?.param;
  console.log(id);
  const [items, setItem] = useState(null);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);

    getCategoryItemById(id)
      .then((data) => setItem(data))
      .catch((err) => console.log(err));
      setInterval(() => {
        setIsloading(false)
      }, 2000);
  },[]);




  
  return (
    <View className="flex-1 items-center justify-center mt-6 bg-[#04020d] relative ">
      {isloading ? (
        <ActivityIndicator color={"#ff0000"} size="large" />
      ) : (
        <>
          {items ? (
            <>
              <SafeAreaView className="flex w-full h-full items-center justify-start gap-4 ">
                <View className="w-full px-6 flex-row items-center justify-between ">
                  <Text className="text-2xl text-gray-500 font-semibold ">
                    4K wallpapers
                  </Text>
                  <TouchableOpacity >
                    <Entypo
                      name="dots-three-vertical"
                      size={24}
                      color="white"
                    />
                  </TouchableOpacity>
                </View>
                {/* installing this  masnary layout */}
                <ScrollView className="w-full h-full px-4">
                  {
                    /* this show the loading effect  */
                    items ? (
                      <MasanoryLayout data={items} screen="Item" />
                    ) : (
                      <>
                        <ActivityIndicator color={"#ff0000"} size="large" />
                      </>
                    )
                  }
                </ScrollView>
              </SafeAreaView>
            </>
          ) : (
            <>
              <Text className="text-3xl font-bold text-white">
                No items found
              </Text>
            </>
          )}
        </>
      )}
    </View>
  );
};

export default ItemScreen;
