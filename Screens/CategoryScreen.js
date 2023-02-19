import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchEarthquakeData, fetchDisasterData } from "../ApiCalls/apiCalls";

export default function CategoryScreen({ route }) {
  console.log(route)
  const [earthquakeData, setEarthquakeData] = useState([]);
  const [disasterData, setDisasterData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    if (route.params === "earthquakes") {
    fetchEarthquakeData().then(res => res.json()).then(data => {
      const mappedEarthquake = data.map(data => {
        return {
          id: data.data.id,
          title: data.data.title,
          date: data.data.date,
          location: data.data.location,
          magnitude: data.data.magnitude,
          source: data.data.url
        }
      })
    setEarthquakeData(data.data)
  }).catch(err => setError(err));
    } else {
      fetchDisasterData(route.params).then(res => res.json()).then(data => {
        const mappedData = data.map(data => {
         return {
          id: data.events.id,
          title: data.events.title,
          coordinates: data.events.geometry,
          source: data.events.sources.url
        }
        })
        setDisasterData(mappedData)
      }).catch(err => setError(err));
    }
  }, []);
  // console.log("earthquake bithc", earthquakeData);
  console.log("disaster babyyyy", disasterData);
  console.log("eroroeiwshfeuow", error);

  return (
    <View>
      <FlatList 
        data={disasterData}
      >

      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({});
