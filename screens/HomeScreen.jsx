import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import MasanoryLayout from "./MasanoryLayout";
import { getCategories } from "../sanity";

const HomeScreen = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [errorText, setErrorText] = useState("");

  const filterData = (text) => {
    if (text.trim() === " ") {
      setFilteredCategories(categories);
      setErrorText("");
    } else {
      const filtered = categories.filter((category) =>
        category.title.toLowerCase().includes(text.toLowerCase())
      );
      if (filtered.length === 0) {
        setErrorText("No matching categories found");
      } else {
        setErrorText("");
      }
      setFilteredCategories(filtered);
    }
  };

  const onChangeText = (text) => {
    setSearchText(text);
    filterData(text);
  };

  useEffect(() => {
    getCategories()
      .then((data) => {
        setCategories(data);
        setFilteredCategories(data);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#04020d]">
      {categories.length !== 0 && (
        <View className="p-4 mt-5">
          <Text className="text-2xl text-gray-500 font-semibold">
            4K wallpapers
          </Text>
          <View className="flex-row items-center mt-4 bg-gray-300 rounded-lg p-2">
            <TextInput
              className="flex-1 bg-transparent focus:outline-none"
              placeholder="Search..."
              value={searchText}
              onChangeText={onChangeText}
            />
            {searchText !== "" && (
              <TouchableOpacity onPress={() => setSearchText("")}>
                <Text className="ml-2 bg-gray-400 rounded-lg p-1">X</Text>
              </TouchableOpacity>
            )}
          </View>
          {errorText !== "" && (
            <Text className="text-red-500 mt-2">{errorText}</Text>
          )}
        </View>
      )}
      <ScrollView className="flex-1 p-4">
        {categories.length === 0 ? (
          <ActivityIndicator color={"#ff0000"} size="large" />
        ) : (
          <MasanoryLayout data={filteredCategories} screen="ItemScreen" />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
