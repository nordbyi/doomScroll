import React from "react";
import { Animated, StyleSheet, View, Image, Easing } from "react-native";

const Mars = () => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 15000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
      <Animated.View style={[styles.orbitMars, {
            transform: [{ rotate: spin }],
          },]}>
        <View style={styles.mars} />
      </Animated.View>
  );
};

export default Mars;

const styles = StyleSheet.create({
  orbitMars: {
    position: "absolute",
    width: 450,
    height: 450,
    // borderStyle: "dashed",
    borderColor: "#e7e5d7",
    borderWidth: 2,
    borderRadius: 225,
  },
  mars: {
    position: "absolute",
    top: 150,
    backgroundColor: "#e7e5d7",
    width: 18,
    height: 18,
    borderRadius: 9,
  },
});
