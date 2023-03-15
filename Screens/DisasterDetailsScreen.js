import { StyleSheet, Text, View, Linking, Image } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { fetchStarPhoto } from '../ApiCalls/apiCalls';
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";

export default function DisasterDetailsScreen({ route }) {

  const [starData, setStarData] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchStarPhoto().then((response) => response.json()).then((data) => {
      setStarData(data);
      setLoading(false);
    })
  }, [])

  let data;
  if (route.params.magnitude) {
    data = 
      <View>
        <Text style={styles.text}>{route.params.date && `Date: ${route.params.date}`}</Text>
        <Text style={styles.text}>{route.params.location && `Location: ${route.params.location}`}</Text>
        <Text style={styles.text}>{route.params.magnitude && `Magnitude: ${route.params.magnitude}`}</Text>
        <Text style={styles.text} onPress={() => Linking.openURL(route.params.source)}>{route.params.source && route.params.source}</Text>
      </View>
  } else if (route.params.missDistance) {
    data = 
      <View>
        <Image style={{width: 400, height: 400}} source={{uri: starData.url}}/>
        <Text style={styles.text}>{route.params.missDistance.miles && `Miss Distance in Miles: ${(+route.params.missDistance.miles).toLocaleString()}`}</Text>
        <Text style={styles.text}>{route.params.relativeVelocity.miles_per_hour && `Relative Velocity in MPH: ${(+route.params.relativeVelocity.miles_per_hour).toLocaleString()}`}</Text>
        <Text style={styles.text}>{route.params.orbitingBody && `Orbiting Body: ${route.params.orbitingBody}`}</Text>
      </View>
  } else {
    data = 
      <View>
        <Text style={styles.text}>Doom Coordinates: {route.params.coordinates[0].coordinates[0]}, {route.params.coordinates[0].coordinates[1]}</Text>
        <Text style={styles.text} onPress={() => Linking.openURL(route.params.source)}>{route.params.source && route.params.source}</Text>
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
        style ={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
        latitude: route.params.coordinates[0].coordinates[1],
        longitude: route.params.coordinates[0].coordinates[0],
        latitudeDelta: 0.3,
        longitudeDelta: 0.0421}}
        customMapStyle={mapStyle}>
          <Marker 
          coordinate={{latitude: route.params.coordinates[0].coordinates[1], 
          longitude: route.params.coordinates[0].coordinates[0],}}/>
        </MapView>}
      <Text style={styles.text}>{route.params.title}</Text>
      {data}
    </View>
  );
}
const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "geometry.fill",
    "stylers": [
      {
        "lightness": 5
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#a76266"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "landscape.natural.landcover",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#3b455e"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
]

const styles = StyleSheet.create({
  text: {
    color: "#e7e5d7",
    fontFamily: "Oswald_400Regular",
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 15
  },
  screen: {
    height: "100%",
    backgroundColor: "#020d19",
  },
  mapStyle: {
    height: '50%', 
    width: '100%',
  },
  box: {
    backgroundColor: "#1e2f42",
    borderRadius: 15,
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
  },
  link: {
    marginLeft: 10,
    marginRight: 10,
  },
  firstText: {
    marginTop: 40
  }
});



