import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import CategoryScreen from "./CategoryScreen";

export default function HomeScreen({navigation}) {
  const categories = [
    { id: 1, type: "Earthquakes", endpoint: "earthquakes"},
    { id: 2, type: "Volcanoes", endpoint: "volcanoes"},
    { id: 3, type: "Wildfires", endpoint: "wildfires"},
    { id: 4, type: "Severe Storms", endpoint: "severeStorms" },
    { id: 5, type: "Asteroids Coming to Earth", endpoint: "asteroids"}
  ];

  const pressHandler = (endpoint) => {
    navigation.navigate("Doom List", endpoint)
  };

  return (
    <View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.box} onPress={() => pressHandler(item.endpoint)}>
            <Text style={styles.text}>{item.type}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
  box: {
    marginVertical: 15,
    backgroundColor: "blue",
  },
});
