import React, {useRef} from "react";
import { Animated, StyleSheet, View, Easing } from "react-native";
import Sun from "./orbits/Sun";
import Mercury from "./orbits/Mercury";
import Venus from "./orbits/Venus";
import Earth from "./orbits/Earth";
import Mars from "./orbits/Mars";
import Jupiter from "./orbits/Jupiter";

const AsteroidSpinnerScreen = () => {

  return (
    <View style={styles.screen}>
      <Sun />
      <Jupiter />
      <Mars />
      <Earth />
      <Venus />
      <Mercury /> 
    </View>
  );
};

export default AsteroidSpinnerScreen;

const styles = StyleSheet.create({
  screen: {
    position: "relative",
    backgroundColor: "#020d19",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
