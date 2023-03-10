import React from "react";
import { Animated, StyleSheet, View, Image, Easing } from "react-native";

const Venus = () => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 7000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
      <Animated.View style={[styles.orbitVenus, {
            transform: [{ rotate: spin }],
          },]}>
        <View style={styles.venus} />
      </Animated.View>
  );
};

export default Venus;

const styles = StyleSheet.create({
  orbitVenus: {
    position: "absolute",
    width: 180,
    height: 180,
    // borderStyle: "dashed",
    borderColor: "#e7e5d7",
    borderWidth: 2,
    borderRadius: 90,
  },
  venus: {
    position: "absolute",
    top: 40,
    backgroundColor: "#e7e5d7",
    width: 16,
    height: 16,
    borderRadius: 8,
  },
});
