import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchEarthquakeData, fetchDisasterData } from "../ApiCalls/apiCalls";

export default function CategoryScreen({ route }) {
  console.log(route)
  const [disasterData, setDisasterData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true)
    if (route.params === "earthquakes") {
    fetchEarthquakeData().then(res => res.json()).then(data => {
      const mappedEarthquake = data.map(data => {
        console.log(data)
        return {
          id: data.data.id,
          title: data.data.title,
          date: data.data.date,
          location: data.data.location,
          magnitude: data.data.magnitude,
          source: data.data.url
        }
      })
    setDisasterData(mappedEarthquake)
    setIsLoading(false)
  }).catch(err => setError(err));
    } else {
      setIsLoading(true)
      fetchDisasterData(route.params).then(res => res.json()).then(data => {
        console.log(data)
        const mappedData = data.map(data => {
          
         return {
          id: data.events.id,
          title: data.events.title,
          coordinates: data.events.geometry,
          source: data.events.sources.url
        }
        })
      
        setDisasterData(mappedData)
        setIsLoading(false)
      }).catch(err => setError(err));
    }
  }, []);
  // console.log("earthquake bithc", earthquakeData);
  console.log("disaster babyyyy", disasterData);
  console.log("eroroeiwshfeuow", error);

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

  
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
