import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import React, { startTransition, useEffect, useState } from "react";
import { fetchEarthquakeData, fetchDisasterData, fetchAsteroidData } from "../ApiCalls/apiCalls";
import SearchForm from "./SearchForm";
import LoadingScreen from "./LoadingScreen";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";


export default function CategoryScreen({ route, navigation }) {

  const [disasterData, setDisasterData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const images = {
    "earthquakes": require("../assets/earthquake_a.png"),
    "volcanoes": require("../assets/volcano_a.jpg"),
    "wildfires": require("../assets/wildfire_b.png"),
    "severeStorms": require("../assets/hurricane_a.jpg"),
    "asteroids": require("../assets/asteroid_b.png")
  }

  const imageToShow = images[route.params]

  useEffect(() => {
    setIsLoading(true);
    if (route.params === "earthquakes") {
    fetchEarthquakeData()
    .then(res => {
      if (!res.ok) {
        throw new Error("Something went wrong")
      } else {
        return res.json()
      }
    })
    .then(data => {
      const mappedEarthquakeData = data.data.map(data => {
        return {
          id: data.id,
          title: data.title,
          date: data.date,
          location: data.location,
          magnitude: data.magnitude,
          source: data.url,
          coordinates: [{
            coordinates: [data.longitude, data.latitude]
          }
          ]
        }
      })
    setDisasterData(mappedEarthquakeData);
    setIsLoading(false);
  }).catch(err => setError(err));
    } else if(route.params === 'asteroids') {
      fetchAsteroidData()
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong")
        } else {
          return res.json()
        }
      })
      .then(data => {  
        const mappedAsteroidData = data.close_approach_data.reduce((acc, cur) => {
          if (Number(cur.close_approach_date.substring(0, 4)) > 2022) {
            const newAsteroid = {
              id: cur.epoch_date_close_approach,
              title: `Doom Approach Date: ${cur.close_approach_date_full}`,
              closeApproachDate: cur.close_approach_date_full,
              relativeVelocity: cur.relative_velocity,
              missDistance: cur.miss_distance,
              orbitingBody: cur.orbiting_body
            }
            return [...acc, newAsteroid];
          }
          return acc;
        },[]);
      setDisasterData(mappedAsteroidData);
      setIsLoading(false);
      }).catch(err => setError(err))
    } else {
      fetchDisasterData(route.params)
      .then(res => {
        if (!res.ok) {
          throw new Error("Something went wrong")
        } else {
          return res.json()
        }
      })
      .then(data => {
        const mappedData = data.events.map(data => {
         return {
          id: data.id,
          title: data.title,
          coordinates: data.geometry,
          source: data.sources.url
          }
        });
        setDisasterData(mappedData);
        setIsLoading(false);
      }).catch(err => setError(err))
    }
  }, []);

  const pressHandler = (item) => {
    navigation.navigate("Doom Details", item)
  }

  useEffect(() => {
    const filteredDisasterData = disasterData.filter((el) => {
      return el.title.toLowerCase().includes(search.toLowerCase())
    });
    setFilteredData(filteredDisasterData);
  }, [search, disasterData])

  let [fontsLoaded] = useFonts({
    Oswald_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.screen}>
      {isLoading && <LoadingScreen />}
      {!isLoading && 
        <View>
          <SearchForm getSearch={setSearch} />
          <Image style={styles.image} source={imageToShow}></Image>
          <FlatList 
            data={filteredData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.box} onPress={() => pressHandler(item)}>
                <Text style={styles.text}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#020d19",
    height: "100%"
  },
  box: {
    alignItems: "center",
    backgroundColor: "#1e2f42",
    borderRadius: 15,
    flex: 1,
    flexDirection: "row",
    height: 85,
    marginTop: 20,
    paddingLeft: 15,
    justifyContent: "center"
  },
  text: {
    color: "#e7e5d7",
    flexShrink: 1,
    fontFamily: "Oswald_400Regular", 
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    height: 300,
    width: 395
  }
});