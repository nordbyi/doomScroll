import React, {useState, useEffect, useRef} from "react";
import { Animated, StyleSheet, View, Pressable } from "react-native";
import { orbit, spin, spinToTop } from "./helperFunctions";

const Mars = () => {
  const [color, setColor] = useState("#e7e5d7");

  useEffect(() => {
    marsOrbit.start();
  }, []);

  const spinValue = useRef(new Animated.Value(0)).current;

  const marsOrbit = orbit(spinValue, 15000);

  const marsSpinToTop = spinToTop(spinValue);

  const marsSpin = spin(spinValue);

  return (
    <Pressable
      style={styles.pressable}
      onPressIn={() => {
        setColor("red");
        marsOrbit.stop();
        marsSpinToTop.start();
      }}
      onPressOut={() => {
        setColor("#e7e5d7");
        marsOrbit.start();
      }}
    >
      <Animated.View
        style={[
          { borderColor: color },
          styles.orbitMars,
          {
            transform: [{ rotate: marsSpin }],
          },
        ]}
      >
        <View style={styles.mars} />
      </Animated.View>
    </Pressable>
  );
};

export default Mars;

const styles = StyleSheet.create({
  pressable: {
    position: "absolute",
    width: 450,
    height: 450,
  },
  orbitMars: {
    position: "absolute",
    width: 450,
    height: 450,
    // borderStyle: "dashed",
    // borderColor: "#e7e5d7",
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
