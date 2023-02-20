import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


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
      <Text>{route.params.coordinates[0].coordinates[0]}, {route.params.coordinates[0].coordinates[1]}</Text>
      <Text>{route.params.source && route.params.source}</Text>
    </View>
  }

  return (
    <View>
      <MapView 
        style ={{height: '50%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421}}/>
      <Text>{route.params.title}</Text>
      {data}
    </View>
  );
}

const styles = StyleSheet.create({});
// const hi = {
//   closeApproachDate: "2023-Aug-16 11:36",
//   id: 1692185760000,
//   missDistance: {
//     astronomical: "0.1470728384",
//     kilometers: "22001783.359494208",
//     lunar: "57.2113341376",
//     miles: "13671274.2341797504",
//   },
//   orbitingBody: "Earth",
//   relativeVelocity: {
//     kilometers_per_hour: "51508.978711979",
//     kilometers_per_second: "14.3080496422",
//     miles_per_hour: "32005.6762446739",
//   },
//   title: "Doom Approach Date: 2023-Aug-16 11:36",
// };
