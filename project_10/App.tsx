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
              tabBarIcon: () => <Ionicons name={"camera"} size={28}/>,
            }}
          />
          <Tab.Screen 
            name="Photo" 
            component={PhotoView} 
            options={{
              tabBarIcon: () => <Ionicons name={"home"} size={28}/>,
            }}/>
          <Tab.Screen 
            name="Gallery" 
            component={GalleryView} 
            options={{
              tabBarIcon: () => <Ionicons name={"list"}  size={28}/>,
            }}/>
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
