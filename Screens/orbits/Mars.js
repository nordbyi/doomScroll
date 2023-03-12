import React, { useState, useEffect, useRef } from "react";
import { Animated, StyleSheet, View, Pressable, Easing } from "react-native";
import { orbit, spin, spinToTop } from "./helperFunctions";

const Mars = () => {
  const [color, setColor] = useState("#e7e5d7");
  // const [stylings, setStylings] = useState({
  //   top: -9,
  //   left: 215,
  //   backgroundColor: "#e7e5d7",
  //   width: 18,
  //   height: 18,
  //   borderRadius: 9,
  // }); // use these stlyings as default.  Update them when touching orbit to expand planet to fill screen

  useEffect(() => {
    marsOrbit.start();
  }, []);

  // const widthValue = new Animated.Value(18)
  const widthValue = useRef(new Animated.Value(18)).current;
  const heightValue = useRef(new Animated.Value(18)).current;
  // const leftValue = useRef(new Animated.Value(215)).current;


  const expand = Animated.timing(widthValue, {
    toValue: 390,
    duration: 600,
    easing: Easing.linear, 
    useNativeDriver: false,
  })

  const contract = Animated.timing(widthValue, {
    toValue: 18,
    duration: 600,
    easing: Easing.linear,
    useNativeDriver: false,
  })

  const expandHeight = Animated.timing(heightValue, {
    toValue: 400,
    duration: 600,
    easing: Easing.linear, 
    useNativeDriver: false,
  })
  const contractHeight = Animated.timing(heightValue, {
    toValue: 18,
    duration: 600,
    easing: Easing.linear,
    useNativeDriver: false,
  })
  // const expandLeft = Animated.timing(leftValue, {
  //   toValue: 0,
  //   duration: 1000,
  //   easing: Easing.linear, 
  //   useNativeDriver: false,
  // })
  // const contractLeft = Animated.timing(leftValue, {
  //   toValue: 215,
  //   duration: 1000,
  //   easing: Easing.linear,
  //   useNativeDriver: false,
  // })

  const spinValue = useRef(new Animated.Value(0)).current;

  const marsOrbit = orbit(spinValue, 15000);

  const marsSpinToTop = spinToTop(spinValue);

  const marsSpin = spin(spinValue);

  // const expandPlanet = () => {
  //   setTimeout(() => {
  //     // Animated.timing(widthValue, {
  //     //   toValue: 200
  //     // }).start()
  //   setStylings({
  //     top: 0,
  //     left: 0,
  //     backgroundColor: "#e7e5d7",
  //     width: 100,
  //     height: 400,
  //     borderRadius: 5,
  //   })}, 700)
  // };

  return (
    <Pressable
      style={styles.pressable}
      onPressIn={() => {
        setColor("red");
        marsOrbit.stop();
        marsSpinToTop.start();
        // expandPlanet()
        expand.start()
        expandHeight.start()
        // expandLeft.start()
      }}
      onPressOut={() => {
        setColor("#e7e5d7");
        marsOrbit.start();
        contract.start()
        contractHeight.start()
        // contractLeft.start()
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
        <Animated.View
          style={[
            styles.mars,
            { width: widthValue },
            { height: heightValue },
            // { left: leftValue }
            // { top: stylings.top },
            // { left: stylings.left },
            // { backgroundColor: stylings.backgroundColor },
            // { width: stylings.width },
            // { height: stylings.height },
            // { borderRadius: stylings.borderRadius },
          ]}
        />
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
    alignItems: 'center'
  },
  mars: {
    position: "absolute",
    top: -9,
    // left: 215,
    backgroundColor: "#e7e5d7",
    // width: 18,
    // height: 18 ,
    borderRadius: 9,
  },
});
