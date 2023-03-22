import React, { useState, useRef, useEffect } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { orbit, spin } from "./helperFunctions";

const Asteroid = ({radius}) => {
  const [color, setColor] = useState("#a94a48");

  useEffect(() => {
    asteroidOrbit.start();
  }, []);

  const spinValue = useRef(new Animated.Value(0)).current;

  const asteroidOrbit = orbit(spinValue, 1500);

  const asteroidSpin = spin(spinValue);

  return (
      <Animated.View
        style={[
          { borderColor: color }, {width: radius + 25}, {height: radius + 25},
          styles.orbitAsteroid,
          {
            transform: [{ rotate: asteroidSpin }],
          },
        ]}
      >
        <View style={styles.asteroid} />
      </Animated.View>
  );
};

export default Asteroid;

const styles = StyleSheet.create({
  orbitAsteroid: {
    position: "absolute",
    borderWidth: 2,
    borderRadius: 150,
    alignItems: "center",
  },
  asteroid: {
    position: "absolute",
    top: -6,
    backgroundColor: "#a94a48",
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});