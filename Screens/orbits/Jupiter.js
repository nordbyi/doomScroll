import React from "react";
import { Animated, StyleSheet, View, Image, Easing } from "react-native";

const Jupiter = () => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 55000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
      <Animated.View style={[styles.orbitJupiter, {
            transform: [{ rotate: spin }],
          },]}>
        <View style={styles.jupiter} />
      </Animated.View>
  );
};

export default Jupiter;

const styles = StyleSheet.create({
  orbitJupiter: {
    position: "absolute",
    width: 750,
    height: 750,
    // borderStyle: "dashed",
    borderColor: "#e7e5d7",
    borderWidth: 2,
    borderRadius: 375,
  },
  jupiter: {
    position: "absolute",
    top: 250,
    backgroundColor: "#e7e5d7",
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
