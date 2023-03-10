import React from "react";
import { Animated, StyleSheet, View, Image, Easing } from "react-native";

const Earth = () => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
      <Animated.View style={[styles.orbitEarth, {
            transform: [{ rotate: spin }],
          },]}>
        <View style={styles.earth} />
      </Animated.View>
  );
};

export default Earth;

const styles = StyleSheet.create({
  orbitEarth: {
    position: "absolute",
    width: 300,
    height: 300,
    // borderStyle: "dashed",
    borderColor: "#e7e5d7",
    borderWidth: 2,
    borderRadius: 150,
  },
  earth: {
    position: "absolute",
    top: 82,
    backgroundColor: "#e7e5d7",
    width: 22,
    height: 22,
    borderRadius: 11,
  },
});
