import React, {useState, useEffect, useRef} from "react";
import { Animated, StyleSheet, View, Pressable} from "react-native";
import { orbit, spin, spinToTop } from "./helperFunctions";


const Jupiter = () => {
  const [color, setColor] = useState("#e7e5d7");

  useEffect(() => {
    jupiterOrbit.start();
  }, []);

  const spinValue = useRef(new Animated.Value(0)).current;

  const jupiterOrbit = orbit(spinValue, 55000);

  const jupiterSpinToTop = spinToTop(spinValue);

  const jupiterSpin = spin(spinValue);

  return (
    <Pressable
      style={styles.pressable}
      onPressIn={() => {
        setColor("red");
        jupiterOrbit.stop();
        jupiterSpinToTop.start();
      }}
      onPressOut={() => {
        setColor("#e7e5d7");
        jupiterOrbit.start();
      }}
    >
      <Animated.View
        style={[
          { borderColor: color },
          styles.orbitJupiter,
          {
            transform: [{ rotate: jupiterSpin }],
          },
        ]}
      >
        <View style={styles.jupiter} />
      </Animated.View>
    </Pressable>
  );
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
  pressable: {
    position: "absolute",
    width: 750,
    height: 750,
  },
  orbitJupiter: {
    position: "absolute",
    width: 750,
    height: 750,
    // borderStyle: "dashed",
    // borderColor: "#e7e5d7",
    borderWidth: 2,
    borderRadius: 375,
  },
  jupiter: {
    position: "absolute",
    top: -17,
    left: 360,
    backgroundColor: "#e7e5d7",
    width: 34,
    height: 34,
    borderRadius: 17,
  },
});
