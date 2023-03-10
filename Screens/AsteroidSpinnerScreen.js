import React from "react";
import { Animated, StyleSheet, View, Image, Easing } from "react-native";

const AsteroidSpinnerScreen = () => {

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <View style={styles.screen}>
      <View style={styles.orbitMercury}>
        <View style={styles.mercury} />
      </View>
      <View style={styles.orbitVenus}>
        <View style={styles.venus} />
      </View>
    </View>
  );
};

export default AsteroidSpinnerScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#020d19",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  orbitMercury: {
    position: "absolute",
    width: 100,
    height: 100,
    borderStyle: "dashed",
    borderColor: "#e7e5d7",
    borderWidth: 2,
    borderRadius: 50,
  },
  mercury: {
    position: "absolute",
    top: 8,
    backgroundColor: "#e7e5d7",
    width: 16,
    height: 16,
    borderRadius: 8,
  },

  orbitVenus: {
    position: "absolute",
    width: 180,
    height: 180,
    borderStyle: "dashed",
    borderColor: "#e7e5d7",
    borderWidth: 2,
    borderRadius: 90,
  },
  venus: {
    position: "absolute",
    top: 35,
    backgroundColor: "#e7e5d7",
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
