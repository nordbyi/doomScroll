import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  View,
  Pressable,
  Easing,
  Text,
} from "react-native";
import { orbit, spin, spinToTop } from "./helperFunctions";
import Countdown from "./Countdown";
import Asteroid from "./Asteroid";

const Mars = () => {
  const [color, setColor] = useState("#e7e5d7");
  const timeoutID = useRef("");

  useEffect(() => {
    marsOrbit.start();
  }, []);

  const widthValue = useRef(new Animated.Value(18)).current;
  const heightValue = useRef(new Animated.Value(18)).current;
  const z_Index = useRef("auto");
  const display = useRef('none')

  const expand = Animated.timing(widthValue, {
    toValue: 390,
    duration: 200,
    easing: Easing.linear,
    useNativeDriver: false,
  });

  const contract = Animated.timing(widthValue, {
    toValue: 18,
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
    toValue: 18,
    duration: 400,
    easing: Easing.linear,
    useNativeDriver: false,
  });

  const spinValue = useRef(new Animated.Value(0)).current;

  const marsOrbit = orbit(spinValue, 15000);

  const marsSpinToTop = spinToTop(spinValue);

  const marsSpin = spin(spinValue);

  return (
    <Pressable
      style={[styles.pressable, { zIndex: z_Index.current }]}
      onPressIn={() => {
        setColor("red");
        marsOrbit.stop();
        marsSpinToTop.start();
        timeoutID.current = setTimeout(() => {
          expand.start();
          expandHeight.start();
        }, 500);
        display.current = 'flex'
        z_Index.current = 999;
      }}
      onPressOut={() => {
        clearTimeout(timeoutID.current);
        setColor("#e7e5d7");
        marsOrbit.start();
        contract.start();
        contractHeight.start();
        z_Index.current = "auto";
        display.current = 'none'

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
          style={[styles.mars, { width: widthValue }, { height: heightValue }]}
        >
          <Asteroid radius={18} />
          <View style={{display: display.current}}>
            <Countdown
              display={display}
              yearsUntilEvent={301}
              fact={
                "Roughly four billion years ago, Mars' core solidified, its magnetic field disappeared, and the solar wind stripped its atmosphere away."
              }
            />
          </View>
        </Animated.View>
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
    alignItems: "center",
  },
  mars: {
    position: "absolute",
    top: -9,
    // left: 215,
    backgroundColor: "#e7e5d7",
    // width: 18,
    // height: 18 ,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
});
