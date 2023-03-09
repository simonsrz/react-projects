import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";

function CountriesScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [text, setText] = useState("");
  const getCountries = async () => {
    setIsLoading(true);
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
    setIsLoading(false);
  };

  const getCountriesBySearch = async (text) => {
    setIsLoading(true);
    const response = await fetch("https://restcountries.com/v3.1/name/" + text);
    const data = await response.json();
    setCountries(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const onChangeText = (text) => {
    setText(text);
    if (text >= 3) {
      getCountriesBySearch(text);
    }
  };

  const renderCountry = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigateToCountryDetails(item)}>
        <Text>{item.name.common}</Text>
      </TouchableOpacity>
    );
  };

  const navigateToCountryDetails = (country) => {
    navigation.navigate("CountryDetailsScreen", country);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={() => onChangeText(text)}
        value={text}
        placeholder="Search for a country"
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={countries}
          renderItem={renderCountry}
          keyExtractor={(item) => item.name.common}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={getCountries} />
          }
        />
      )}
    </View>
  );
}

function CountryDetailsScreen({ route }) {
  const country = route.params;

  const flag =
    "https://flagcdn.com/16x12/" + country.cca2.toLowerCase() + ".png";
  return (
    <View style={styles.container}>
      <Text style={styles.content}>This is a DETAIL screen</Text>
      <Text>{country.name.common}</Text>
      <Image source={{ uri: flag }} style={{ width: 16, height: 12 }}></Image>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CountriesScreen"
          component={CountriesScreen}
          options={{ title: "Countries" }}
        />
        <Stack.Screen
          name="CountryDetailsScreen"
          component={CountryDetailsScreen}
          options={{ title: "Country Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    margin: 20,
    fontSize: 18,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
