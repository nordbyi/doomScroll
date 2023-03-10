import React from "react";
import { Animated, StyleSheet, View, Image, Easing } from "react-native";
import Sun from "./orbits/Sun";
import Mercury from "./orbits/Mercury";
import Venus from "./orbits/Venus";
import Earth from "./orbits/Earth";
import Mars from "./orbits/Mars";
import Jupiter from "./orbits/Jupiter";

const AsteroidSpinnerScreen = () => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <View style={styles.screen}>
      <Sun />
      {/* <Animated.View style={[styles.orbitMercury, {
            transform: [{ rotate: spin }],
          },]}>
        <View style={styles.mercury} />
      </Animated.View> */}
      <Mercury />
      {/* <Animated.View style={[styles.orbitVenus, {
            transform: [{ rotate: spin }],
          }]}>
        <View style={styles.venus} />
      </Animated.View> */}
      <Venus />
      <Earth />
      <Mars />
      <Jupiter />
    </View>
  );
};

export default AsteroidSpinnerScreen;

const styles = StyleSheet.create({
  screen: {
    position: 'relative',
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
