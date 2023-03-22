import React from "react";
import { StyleSheet, View } from "react-native";
import Sun from "./orbits/Sun";
import Planet from "./orbits/Planet";


const AsteroidSpinnerScreen = ({ route }) => {
  const planetFacts = {
    mars: "Roughly four billion years ago, Mars' core solidified, its magnetic field disappeared, and the solar wind stripped its atmosphere away.",
    venus: "Venus' atmosphere filled with carbon dioxide causing a runaway greenhouse effect. It's the hottest planet in our solar system, even though Mercury is closer to the Sun.",
    earth: "In 1972 scientists at the Massachusetts Institute of Technology (MIT) created a method to determine when the fall of society would take place.  So far, their projections have been on track, new analysis suggests human society will collapse around 2040."
  }

  return (
    <View style={styles.screen}>
      <Sun />
      <Planet name={'Jupiter'} orbitingBody={route.params} containerSize={720} planetSize={34} orbitPeriod={55000} yearsUntilEvent={10} fact={'Testing 1 2 1 2'}/>
      <Planet name={'Mars'} orbitingBody={route.params} containerSize={450} planetSize={18} orbitPeriod={15000} yearsUntilEvent={301} fact={planetFacts.mars}/>
      <Planet name={'Earth'} orbitingBody={route.params} containerSize={300} planetSize={22} orbitPeriod={10500} yearsUntilEvent={17} fact={planetFacts.earth}/>
      <Planet name={'Venus'} orbitingBody={route.params} containerSize={180} planetSize={20} orbitPeriod={6500} yearsUntilEvent={20} fact={planetFacts.venus}/>
      <Planet name={'Merc'} orbitingBody={route.params} containerSize={100} planetSize={12} orbitPeriod={4000} yearsUntilEvent={10} fact={'Testing 1 2 1 2'}/>
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
