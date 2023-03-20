import React, { useState, useEffect, useRef } from "react";
import { Animated, StyleSheet, View, Pressable, Easing } from "react-native";
import { orbit, spin, spinToTop } from "./helperFunctions";
import Countdown from "./Countdown";
import Asteroid from "./Asteroid";

const Planet = ({
  name,
  containerSize,
  planetSize,
  orbitPeriod,
  yearsUntilEvent,
  fact,
}) => {
  const [color, setColor] = useState("#e7e5d7");
  const timeoutID = useRef("");

  useEffect(() => {
    planetOrbit.start();
  }, []);

  const widthValue = useRef(new Animated.Value(planetSize)).current;
  const heightValue = useRef(new Animated.Value(planetSize)).current;
  const z_Index = useRef("auto");
  const display = useRef("none");

  const expand = Animated.timing(widthValue, {
    toValue: 390,
    duration: 200,
    easing: Easing.linear,
    useNativeDriver: false,
  });

  const contract = Animated.timing(widthValue, {
    toValue: planetSize,
    duration: 400,
    easing: Easing.linear,
    useNativeDriver: false,
  });

  const expandHeight = Animated.timing(heightValue, {
    toValue: 450,
    duration: 200,
    easing: Easing.linear,
    useNativeDriver: false,
  });
  const contractHeight = Animated.timing(heightValue, {
    toValue: planetSize,
    duration: 400,
    easing: Easing.linear,
    useNativeDriver: false,
  });

  const spinValue = useRef(new Animated.Value(0)).current;

  const planetOrbit = orbit(spinValue, orbitPeriod);

  const planetSpinToTop = spinToTop(spinValue);

  const planetSpin = spin(spinValue);

  return (
    <Pressable
      style={[
        styles.pressable,
        {
          zIndex: z_Index.current,
          width: containerSize,
          height: containerSize,
        },
      ]}
      onPressIn={() => {
        setColor("red");
        planetOrbit.stop();
        planetSpinToTop.start();
        timeoutID.current = setTimeout(() => {
          expand.start();
          expandHeight.start();
        }, 500);
        display.current = "flex";
        z_Index.current = 999;
      }}
      onPressOut={() => {
        clearTimeout(timeoutID.current);
        setColor("#e7e5d7");
        planetOrbit.start();
        contract.start();
        contractHeight.start();
        z_Index.current = "auto";
        display.current = "none";
      }}
    >
      <Animated.View
        style={[
          {
            borderColor: color,
            width: containerSize,
            height: containerSize,
            borderRadius: containerSize / 2,
          },
          styles.orbit,
          {
            transform: [{ rotate: planetSpin }],
          },
        ]}
      >
        <Animated.View
          style={[
            styles.planet,
            { width: widthValue },
            { height: heightValue },
            { borderRadius: planetSize / 2 },
            { top: (planetSize /2) * -1 }
          ]}
        >
          <Asteroid radius={planetSize} />
          <View style={{ display: display.current }}>
            <Countdown
              display={display}
              yearsUntilEvent={yearsUntilEvent}
              fact={fact}
            />
          </View>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export default Planet;

const styles = StyleSheet.create({
  pressable: {
    position: "absolute",
    // width: 450,
    // height: 450,
  },
  orbit: {
    position: "absolute",
    // width: 450,
    // height: 450,
    // borderStyle: "dashed",
    // borderColor: "#e7e5d7",
    borderWidth: 2,
    // borderRadius: 225,
    alignItems: "center",
  },
  planet: {
    position: "absolute",
    top: -9,
    // left: 215,
    backgroundColor: "#e7e5d7",
    // width: 18,
    // height: 18 ,
    // borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
});
