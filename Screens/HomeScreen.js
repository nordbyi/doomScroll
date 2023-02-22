import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import CategoryScreen from "./CategoryScreen";

export default function HomeScreen({navigation}) {
  const categories = [
    { id: 1, type: "Earthquakes", endpoint: "earthquakes", image: "assets/redHouse.png"},
    { id: 2, type: "Volcanoes", endpoint: "volcanoes", image: "assets/redHouse.png"},
    { id: 3, type: "Wildfires", endpoint: "wildfires", image: "assets/redHouse.png"},
    { id: 4, type: "Severe Storms", endpoint: "severeStorms", image: "assets/redHouse.png" },
    { id: 5, type: "Asteroids Coming to Earth", endpoint: "asteroids", image: "assets/redHouse.png"}
  ];
  
  const [images, setImages] = useState([
    require("../assets/redHouse.png"),
    require("../assets/redHouse.png"),
    require("../assets/redHouse.png"),
    require("../assets/redHouse.png"),
    require("../assets/redHouse.png")
  ])

  const pressHandler = (endpoint) => {
    navigation.navigate("Doom List", endpoint)
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.box} onPress={() => pressHandler(item.endpoint)}>
            <Image source={images[index]} style={styles.image}/>
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
    color: "#e7e5d7",
    textAlign: "center"
  },
  box: {
    // marginVertical: 15,
    backgroundColor: "#1e2f42",
    borderRadius: 15,
    flex: 1,
    flexDirection: "row",
    height: 150,
    alignItems: "center"
  },
  screen: {
    backgroundColor: "#020d19",
    height: "100%",
  },
  headerStyle: {
    backgroundColor: "#001D3D"
  },
  image: {
    height: 50,
    width: 50
  }
});
