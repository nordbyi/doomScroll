import React, { useState, useRef, useEffect } from "react";
import { Animated, StyleSheet, View, Pressable } from "react-native";
import { orbit, spin, spinToTop } from "./helperFunctions";
import Asteroid from "./Asteroid";

const Earth = () => {
  const [color, setColor] = useState("#e7e5d7");

  useEffect(() => {
    earthOrbit.start();
  }, []);

  const spinValue = useRef(new Animated.Value(0)).current;

  const earthOrbit = orbit(spinValue, 10000);

  const earthSpinToTop = spinToTop(spinValue);

  const earthSpin = spin(spinValue);

  // const spinToTop = spinToTop

  // const orbit = Animated.loop(
  //   Animated.timing(spinValue, {
  //     toValue: 1,
  //     duration: 10000,
  //     easing: Easing.linear, // Easing is an additional import from react-native
  //     useNativeDriver: true, // To make use of native driver for performance
  //   })
  // );

  // const spin = spinValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ["0deg", "360deg"],
  // });

  return (
    <Pressable
      style={styles.pressable}
      onPressIn={() => {
        setColor("red");
        earthOrbit.stop();
        earthSpinToTop.start();
      }}
      onPressOut={() => {
        setColor("#e7e5d7");
        earthOrbit.start();
      }}
    >
      <Animated.View
        style={[
          { borderColor: color },
          styles.orbitEarth,
          {
            transform: [{ rotate: earthSpin }],
          },
        ]}
      >
        <View style={styles.earth}>
          <Asteroid radius={22}/>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default Earth;

const styles = StyleSheet.create({
  pressable: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  orbitEarth: {
    position: "absolute",
    width: 300,
    height: 300,
    borderWidth: 2,
    borderRadius: 150,
  },
  earth: {
    position: "absolute",
    top: -11,
    left: 138,
    backgroundColor: "#e7e5d7",
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

// position: "absolute",
// top: -6,
// left: 42,
// backgroundColor: "#e7e5d7",
// width: 12,
// height: 12,
// borderRadius: 6,
