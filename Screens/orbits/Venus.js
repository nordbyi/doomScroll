import React, {useState, useEffect, useRef} from "react";
import { Animated, StyleSheet, View, Pressable } from "react-native";
import { orbit, spin, spinToTop } from "./helperFunctions";

const Venus = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  const [color, setColor] = useState("#e7e5d7");

  useEffect(() => {
    venusOrbit.start();
  }, []);

  const venusOrbit = orbit(spinValue, 5000);

  const venusSpinToTop = spinToTop(spinValue);

  const venusSpin = spin(spinValue);

  return (
    <Pressable
      style={styles.pressable}
      onPressIn={() => {
        setColor("red");
        venusOrbit.stop();
        venusSpinToTop.start();
      }}
      onPressOut={() => {
        setColor("#e7e5d7");
        venusOrbit.start();
      }}
    >
      <Animated.View
        style={[
          { borderColor: color },
          styles.orbitVenus,
          {
            transform: [{ rotate: venusSpin }],
          },
        ]}
      >
        <View style={styles.venus} />
      </Animated.View>
    </Pressable>
  );

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
  pressable: {
    position: "absolute",
    width: 180,
    height: 180,
  },
  orbitVenus: {
    position: "absolute",
    width: 180,
    height: 180,
    // borderStyle: "dashed",
    // borderColor: "#e7e5d7",
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
// position: "absolute",
// top: -6,
// left: 42,
// backgroundColor: "#e7e5d7",
// width: 12,
// height: 12,
// borderRadius: 6,