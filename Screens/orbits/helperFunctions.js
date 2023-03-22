import { Animated, Easing } from "react-native";

export const orbit = (spinValue, orbitPeriod) => {
  return Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: orbitPeriod,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  );
};

export const spinToTop = (spinValue) => {
  return Animated.timing(spinValue, {
    toValue: 0,
    duration: 500,
    easing: Easing.linear,
    useNativeDriver: true,
  });
};

export const spin = (spinValue) => {
  return spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
};
