import { StyleSheet, Text, View } from "react-native";
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
    fetchEarthquakeData().then(res => res.json()).then(data => setEarthquakeData(data.data)).catch(err => setError(err));
    } else {
      fetchDisasterData(route.params).then(res => res.json()).then(data => setDisasterData(data.events)).catch(err => setError(err));
    }
  }, []);
  console.log("earthquake bithc", earthquakeData);
  console.log("disaster babyyyy", disasterData);
  console.log("eroroeiwshfeuow", error);

  return (
    <View>
      <Text>GET ON BOARD IAN</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
