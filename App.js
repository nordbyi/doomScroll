import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { fetchEarthquakeData, fetchDisasterData} from "./ApiCalls/apiCalls";
import HomeScreen from "./Screens/HomeScreen";
import CategoryScreen from "./Screens/CategoryScreen";
import SearchScreen from "./Screens/SearchScreen";
import FilteredScreen from "./Screens/FilteredScreen";
import DisasterDetailsScreen from "./Screens/DisasterDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {

//   const [earthquakeData, setEarthquakeData] = useState([]);
//   const [disasterData, setDisasterData] = useState([]);
  
//   useEffect(() => {
//     fetchEarthquakeData().then(res => res.json()).then(data => setEarthquakeData(data.data[0]));
//     fetchDisasterData("wildfires").then(res => res.json()).then(data => console.log(data.events[0]));
//     fetchDisasterData("severeStorms").then(res => res.json()).then(data => console.log(data.events[0]));
//     fetchDisasterData("volcanoes").then(res => res.json()).then(data => console.log(data.events[0]));
//   }, []);
//  console.log("earthquaaaake", earthquakeData);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="DoomScroll" component={HomeScreen} />
          <Stack.Screen name="Doom List" component={CategoryScreen} />
          <Stack.Screen name="Doom Details" component={DisasterDetailsScreen} />
          <Stack.Screen name="Search for Doom" component={SearchScreen} />
          <Stack.Screen name="Meet Your Doom" component={FilteredScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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
