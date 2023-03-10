import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./Screens/HomeScreen";
import CategoryScreen from "./Screens/CategoryScreen";
import DisasterDetailsScreen from "./Screens/DisasterDetailsScreen";
import AboutUsScreen from "./Screens/AboutUsScreen";
import AsteroidSpinnerScreen from "./Screens/AsteroidSpinnerScreen";

// type 'expo r -c' in terminal to run
// or 'npx expo start'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#020d19" },
            headerTitleStyle: { color: "#e7e5d7", fontSize: 20 },
            headerBackTitle: "Back",
          }}
        >
          <Stack.Screen
            name="Doom Scroll"
            component={HomeScreen}
            screenOptions={{ headerBackTitle: "Back" }}
          />
          <Stack.Screen
            name="Doom List"
            component={CategoryScreen}
            screenOptions={{ headerBackTitle: "Back" }}
          />
          <Stack.Screen
            name="Doom Details"
            component={DisasterDetailsScreen}
            screenOptions={{ headerBackTitle: "Back" }}
          />
          <Stack.Screen
            name="About Us"
            component={AboutUsScreen}
            screenOptions={{ headerBackTitle: "Back" }}
          />
          <Stack.Screen
            name="Spinner"
            component={AsteroidSpinnerScreen}
            screenOptions={{ headerBackTitle: "Back" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
