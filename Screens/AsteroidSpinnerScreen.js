import React, {useRef} from "react";
import { Animated, StyleSheet, View, Easing } from "react-native";
import Sun from "./orbits/Sun";
import Mercury from "./orbits/Mercury";
import Venus from "./orbits/Venus";
import Earth from "./orbits/Earth";
import Mars from "./orbits/Mars";
import Jupiter from "./orbits/Jupiter";
import Planet from "./orbits/Planet";

const AsteroidSpinnerScreen = () => {
  const planetFacts = {
    mars: "Roughly four billion years ago, Mars' core solidified, its magnetic field disappeared, and the solar wind stripped its atmosphere away.",
    venus: "Venus' atmosphere filled with carbon dioxide causing a runaway greenhouse effect. It's the hottest planet in our solar system, even though Mercury is closer to the Sun."
    // mercury:
  }
  return (
    <View style={styles.screen}>
      <Sun />
      {/* <Jupiter /> */}
      <Planet name={'Jupiter'} containerSize={720} planetSize={34} orbitPeriod={55000} yearsUntilEvent={10} fact={'Testing 1 2 1 2'}/>
      <Planet name={'Mars'} containerSize={450} planetSize={18} orbitPeriod={15000} yearsUntilEvent={301} fact={planetFacts.mars}/>
      <Planet name={'Earth'} containerSize={300} planetSize={22} orbitPeriod={10000} yearsUntilEvent={10} fact={'Testing 1 2 1 2'}/>
      <Planet name={'Venus'} containerSize={180} planetSize={20} orbitPeriod={5000} yearsUntilEvent={20} fact={planetFacts.venus}/>
      <Planet name={'Jupiter'} containerSize={100} planetSize={12} orbitPeriod={4000} yearsUntilEvent={10} fact={'Testing 1 2 1 2'}/>
      
      {/* <Mars />
      <Earth />
      <Venus />
      <Mercury />  */}
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
