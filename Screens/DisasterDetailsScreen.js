import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function DisasterDetailsScreen({ route }) {

  return (
    <View>
      <Text>{route.params.title}</Text>
      <Text>{route.params.date}</Text>
      <Text>{route.params.location}</Text>
      <Text>{route.params.magnitude}</Text>
      <Text>{route.params.source}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
