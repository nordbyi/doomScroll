import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CategoryScreen from "./Screens/CategoryScreen";
import SearchScreen from "./Screens/SearchScreen";
import FilteredScreen from "./Screens/FilteredScreen";
import DisasterDetailsScreen from "./Screens/DisasterDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="DoomScroll" component={HomeScreen} />
          <Stack.Screen name="Disaster Categories" component={CategoryScreen} />
          <Stack.Screen
            name="Your Disaster"
            component={DisasterDetailsScreen}
          />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Search Results" component={FilteredScreen} />
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
