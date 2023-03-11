import React, {useState, useRef, useEffect} from "react";
import {
  Animated,
  StyleSheet,
  View,
  Easing,
  Pressable,
} from "react-native";
import { orbit, spin, spinToTop } from "./helperFunctions";

const Earth = () => {
  const [color, setColor] = useState("#e7e5d7")

  useEffect(() => {
    earthOrbit.start()
  }, [])

  const spinValue = useRef(new Animated.Value(0)).current;

  const earthOrbit = orbit(spinValue, 10000)

  const earthSpinToTop = spinToTop(spinValue)

  const earthSpin = spin(spinValue)

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
    <Pressable style={styles.pressable} onPressIn={() => {
      setColor('red')
      earthOrbit.stop()
      earthSpinToTop.start()}
    } onPressOut ={() => {
      setColor('#e7e5d7')
      earthOrbit.start()
    }
    }>
      <Animated.View
        
        style={[
          {borderColor: color},
          styles.orbitEarth,
          {
            transform: [{ rotate: earthSpin }],
          },
        ]}
      >
        <View style={styles.earth} />
      </Animated.View>
    </Pressable>
  );
};

export default Earth;

const styles = StyleSheet.create({
  pressable: {
    width: 300,
    height: 300,
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
    top: 82,
    backgroundColor: "#e7e5d7",
    width: 22,
    height: 22,
    borderRadius: 11,
  },
});
