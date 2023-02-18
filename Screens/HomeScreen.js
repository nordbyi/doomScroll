import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";

export default function HomeScreen({navigation}) {
  const categories = [
    { id: 1, type: "Earthquakes" },
    { id: 2, type: "Volcanoes" },
    { id: 3, type: "Wildfires" },
    { id: 4, type: "Severe Storms" },
  ];

  const pressHandler = () => {
    navigation.navigate("Doom List")
  }

  return (
    <View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.box} onPress={pressHandler}>
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
