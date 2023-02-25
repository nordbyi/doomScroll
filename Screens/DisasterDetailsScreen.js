import { StyleSheet, Text, View, Linking, Image } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { fetchStarPhoto } from '../ApiCalls/apiCalls';
import MapStyling from "./MapStyling";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";

export default function DisasterDetailsScreen({ route }) {

  const [starData, setStarData] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchStarPhoto().then((response) => response.json()).then((data) => {
      console.log(data.url)
      setStarData(data)
      setLoading(false)
    })
  }, [])

  let data;
  if (route.params.magnitude) {
    data = <View>
        <Text style={styles.text}>{route.params.date && route.params.date}</Text>
        <Text style={styles.text}>{route.params.location && route.params.location}</Text>
        <Text style={styles.text}>{route.params.magnitude && `Magnitude: ${route.params.magnitude}`}</Text>
        <Text style={styles.text} onPress={() => Linking.openURL(route.params.source)}>{route.params.source && route.params.source}</Text>
      </View>
  } else if (route.params.missDistance) {
    data = <View>
      <Text style={styles.text}>{route.params.missDistance.miles && `Miss Distance in Miles: ${(+route.params.missDistance.miles).toLocaleString()}`}</Text>
      <Text style={styles.text}>{route.params.relativeVelocity.miles_per_hour && `Relative Velocity in MPH: ${(+route.params.relativeVelocity.miles_per_hour).toLocaleString()}`}</Text>
      <Text style={styles.text}>{route.params.orbitingBody && `Orbiting Body: ${route.params.orbitingBody}`}</Text>
    </View>
  } else {
    data = <View>
      <Image style={{width: 200,
        height: 300}} source={{uri: starData.url}}/>
      <Text style={styles.text}>Doom Coordinates: {route.params.coordinates[0].coordinates[0]}, {route.params.coordinates[0].coordinates[1]}</Text>
      <Text style={styles.text} onPress={() => Linking.openURL(route.params.source)}>{route.params.source && `Read here for more doom: ${route.params.source}`}</Text>
    </View>
  }

  let [fontsLoaded] = useFonts({
    Oswald_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.screen}>
      {route.params.coordinates && <MapView 
        style ={{height: '50%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
        latitude: route.params.coordinates[0].coordinates[1],
        longitude: route.params.coordinates[0].coordinates[0],
        latitudeDelta: 0.3,
        longitudeDelta: 0.0421}}
        >
          <Marker 
          coordinate={{latitude: route.params.coordinates[0].coordinates[1], 
          longitude: route.params.coordinates[0].coordinates[0],}}/>
        </MapView>}
      <Text style={styles.text}>Name: {route.params.title}</Text>
      {data}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#e7e5d7",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Oswald_400Regular",
  },
  screen: {
    backgroundColor: "#020d19",
    height: "100%"
  },
});

