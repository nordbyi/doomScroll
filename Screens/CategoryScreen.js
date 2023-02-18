import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { fetchEarthquakeData, fetchDisasterData } from "../ApiCalls/apiCalls";

export default function CategoryScreen() {
  const [earthquakeData, setEarthquakeData] = useState([]);
  const [disasterData, setDisasterData] = useState([]);
  
  useEffect(() => {
    fetchEarthquakeData().then(res => res.json()).then(data => setEarthquakeData(data.data));
    fetchDisasterData("wildfires").then(res => res.json()).then(data => setDisasterData(data));
  }, []);

  return (
    <View>
      <Text>GET ON BOARD IAN</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
