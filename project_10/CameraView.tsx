import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { ImageContext } from "./ContextStore";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

export default function CameraView() {
  const navigation = useNavigation();
  const { image, setImage } = useContext(ImageContext);

  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      navigation.navigate("Photo");
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Take an image" onPress={pickImage} />
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
});
