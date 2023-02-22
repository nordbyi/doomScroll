import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapStyling from "./MapStyling";


export default function DisasterDetailsScreen({ route }) {
  console.log(route.params);

  let data
  if(route.params.magnitude) {
    data = <View>
        <Text>{route.params.date && route.params.date}</Text>
        <Text>{route.params.location && route.params.location}</Text>
        <Text>{route.params.magnitude && route.params.magnitude}</Text>
        <Text>{route.params.source && route.params.source}</Text>
      </View>
  } else if (route.params.missDistance) {
    data = <View>
      <Text>{route.params.missDistance.miles && `Miss Distance in Miles: ${(+route.params.missDistance.miles).toLocaleString()}`}</Text>
      <Text>{route.params.relativeVelocity.miles_per_hour && `Relative Velocity in MPH: ${(+route.params.relativeVelocity.miles_per_hour).toLocaleString()}`}</Text>
      <Text>{route.params.orbitingBody && `Orbiting Body: ${route.params.orbitingBody}`}</Text>
    </View>

  } else {
    data = <View>
      <Text>Doom Coordinates: {route.params.coordinates[0].coordinates[0]}, {route.params.coordinates[0].coordinates[1]}</Text>
      <Text>{route.params.source && `Read here for more doom: ${route.params.source}`}</Text>
    </View>
  }

  return (
    <View>
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
      <Text>Name: {route.params.title}</Text>
      {data}
    </View>
  );
}

const styles = StyleSheet.create({});

