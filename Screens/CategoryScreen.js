import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchEarthquakeData, fetchDisasterData, fetchAsteroidData } from "../ApiCalls/apiCalls";
import DisasterDetailsScreen from "./DisasterDetailsScreen";


export default function CategoryScreen({ route, navigation }) {
  // console.log(route)
  const [disasterData, setDisasterData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  


  useEffect(() => {
    setIsLoading(true)
    if (route.params === "earthquakes") {
    fetchEarthquakeData().then(res => res.json()).then(data => {
      const mappedEarthquake = data.data.map(data => {
        return {
          id: data.id,
          title: data.title,
          date: data.date,
          location: data.location,
          magnitude: data.magnitude,
          source: data.url
        }
      })
    setDisasterData(mappedEarthquake)
    setIsLoading(false)
  }).catch(err => setError(err));
    } else if(route.params === 'asteroids') {
      fetchAsteroidData().then(res => res.json()).then(data => {  
        const mappedAsteroids = data.close_approach_data.reduce((acc, cur) => {
          if (Number(cur.close_approach_date.substring(0, 4)) > 2022) {
            const newAsteroid = {
              id: cur.epoch_date_close_approach,
              title: `Doom Approach Date: ${cur.close_approach_date_full}`,
              closeApproachDate: cur.close_approach_date_full,
              relativeVelocity: cur.relative_velocity,
              missDistance: cur.miss_distance,
              orbitingBody: cur.orbiting_body
            }
            return [...acc, newAsteroid]
          }
          return acc
        },[])
      setDisasterData(mappedAsteroids);
      setIsLoading(false)
      }).catch(err => setError(err))
    } else {
      setIsLoading(true)
      fetchDisasterData(route.params).then(res => res.json()).then(data => {
        const mappedData = data.events.map(data => {
         return {
          id: data.id,
          title: data.title,
          coordinates: data.geometry,
          source: data.sources.url
        }
        })
        setDisasterData(mappedData)
        setIsLoading(false)
      }).catch(err => setError(err));
    }
  }, []);

  const pressHandler = (item) => {
    navigation.navigate("Doom Details", item)
  }

  return (
    <View>
      
      <FlatList 
        data={disasterData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.box} onPress={() => pressHandler(item)}>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
