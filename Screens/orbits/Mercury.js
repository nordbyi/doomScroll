import React from "react";
import { Animated, StyleSheet, View, Image, Easing } from "react-native";

const Mercury = () => {
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
      <Animated.View style={[styles.orbitMercury, {
            transform: [{ rotate: spin }],
          },]}>
        <View style={styles.mercury} />
      </Animated.View>
  );
};

export default Mercury;

const styles = StyleSheet.create({
  orbitMercury: {
    position: "absolute",
    width: 100,
    height: 100,
    // borderStyle: "dashed",
    borderColor: "#e7e5d7",
    borderWidth: 2,
    borderRadius: 50,
  },
  mercury: {
    position: "absolute",
    top: 17,
    backgroundColor: "#e7e5d7",
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
