import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getItemById, urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import moment from 'moment';
import FlashMessage, { showMessage } from 'react-native-flash-message';

const Item = ({ route }) => {
  const id = route?.params?.param;
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    getItemById(id)
      .then((data) => {
        console.log(data);
        setItem(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error);
      });
  }, [id]);

  const handleDownload = async () => {
    if (!item || !item.image) {
      console.log("Image not found");
      return;
    }

    const fileUri = FileSystem.documentDirectory + `${moment().format('YYYYMMDDhhmmss')}.jpg`;

    try {
      const downloadedFile = await FileSystem.downloadAsync(urlFor(item.image).url(), fileUri);

      if (downloadedFile.status === 200) {
        console.log("File downloaded successfully");

        const asset = await MediaLibrary.createAssetAsync(fileUri);
        await MediaLibrary.createAlbumAsync('Downloads', asset, false);

        console.log("File added to media library");

        showMessage({
          message: 'Download Successful',
          description: 'Image downloaded successfully!',
          type: 'success',
          duration: 1000,
        });
      } else {
        console.log("Download failed");
      }
    } catch (err) {
      console.log("Download error: ", err);
    }
  };

  return (
    <View style={styles.container}>
      <FlashMessage position="top" /> 
      {isLoading ? (
        <ActivityIndicator color="#ff0000" size="large" />
      ) : item?.image ? (
        <ImageBackground
          source={{
            uri: urlFor(item.image).url(),
          }}
          style={styles.image}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={32} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.blurOverlay}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <TouchableOpacity
              style={styles.downloadButton}
              onPress={handleDownload}
            >
              <Ionicons
                name="md-cloud-download-sharp"
                size={40}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      ) : (
        <Text style={styles.errorText}>Image not found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#04020d",
    position: "relative",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "relative",
  },
  buttonContainer: {
    position: "absolute",
    top: 15,
    left: 0,
    padding: 16,
    zIndex: 10,
  },
  blurOverlay: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    backgroundColor: "rgba(0,0,0,0.5)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    color: "white",
  },
  downloadButton: {
    marginLeft: 20,
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
});

export default Item;
