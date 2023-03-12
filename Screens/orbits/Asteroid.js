import React, { useState, useRef, useEffect } from "react";
import { Animated, StyleSheet, View, Pressable } from "react-native";
import { orbit, spin, spinToTop } from "./helperFunctions";

const Asteroid = ({radius}) => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    asteroidOrbit.start();
  }, []);

  const spinValue = useRef(new Animated.Value(0)).current;

  const asteroidOrbit = orbit(spinValue, 1500);

  // const asteroidSpinToTop = spinToTop(spinValue);

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
    // width: 300,
    // height: 300,
    borderWidth: 2,
    borderRadius: 150,
  },
  asteroid: {
    position: "absolute",
    // top: -11,
    // left: 138,
    backgroundColor: "red",
    width: 10,
    height: 10,
    borderRadius: 11,
  },
});

// position: "absolute",
// top: -6,
// left: 42,
// backgroundColor: "#e7e5d7",
// width: 12,
// height: 12,
// borderRadius: 6,