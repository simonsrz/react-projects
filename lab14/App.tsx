import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PhotoView from "./PhotoView";
import CameraView from "./CameraView";
import GalleryView from "./GalleryView";
import { useState } from "react";
import { ImageContext } from "./ContextStore";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  const [image, setImage] = useState("https://reactjs.org/logo-og.png");
  const value = { image, setImage };

  return (
    <ImageContext.Provider value={value}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Photo">
          <Tab.Screen
            name="Camera"
            component={CameraView}
            options={{
              tabBarIcon: () => <Ionicons name={"home"} />,
            }}
          />
          <Tab.Screen name="Photo" component={PhotoView} />
          <Tab.Screen name="Gallery" component={GalleryView} />
        </Tab.Navigator>
      </NavigationContainer>
    </ImageContext.Provider>
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
