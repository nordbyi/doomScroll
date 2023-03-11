import React, {useState, useEffect, useRef} from "react";
import { Animated, StyleSheet, View, Pressable} from "react-native";
import { orbit, spin, spinToTop } from "./helperFunctions";

const Mercury = () => {
  const [color, setColor] = useState("#e7e5d7");

  useEffect(() => {
    mercuryOrbit.start();
  }, []);

  const spinValue = useRef(new Animated.Value(0)).current;

  const mercuryOrbit = orbit(spinValue, 5000);

  const mercurySpinToTop = spinToTop(spinValue);

  const mercurySpin = spin(spinValue);

  return (
    <Pressable
      style={styles.pressable}
      onPressIn={() => {
        setColor("red");
        mercuryOrbit.stop();
        mercurySpinToTop.start();
      }}
      onPressOut={() => {
        setColor("#e7e5d7");
        mercuryOrbit.start();
      }}
    >
      <Animated.View
        style={[
          { borderColor: color },
          styles.orbitMercury,
          {
            transform: [{ rotate: mercurySpin }],
          },
        ]}
      >
        <View style={styles.mercury} />
      </Animated.View>
    </Pressable>
  );
};

export default Mercury;

const styles = StyleSheet.create({
  pressable: {
    position: "absolute",
    width: 100,
    height: 100,
  },
  orbitMercury: {
    position: "absolute",
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 50,
  },
  mercury: {
    position: "absolute",
    top: -6,
    left: 42,
    backgroundColor: "#e7e5d7",
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});
