import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { ImageContext } from "./ContextStore";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";


export default function GalleryView() {
  const { image, setImage } = useContext(ImageContext);
  const navigation = useNavigation();
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      navigation.navigate('Photo');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
