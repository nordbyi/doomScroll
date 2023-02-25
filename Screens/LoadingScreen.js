import React from "react";
import { Animated, StyleSheet, View, Image, Easing } from "react-native";

const LoadingScreen = () => {
  const spinValue = new Animated.Value(0);

  // First set up animation
  Animated.loop(Animated.timing(spinValue, {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear, // Easing is an additional import from react-native
    useNativeDriver: true, // To make use of native driver for performance
  })).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  // return (
  //   <View style={styles.container}>
  //     <Animated.View
  //       style={[
  //         styles.meteorContainer,
  //         {
  //           transform: [{ rotate: spin }],
  //         },
  //       ]}
  //     >
  //       <Image
  //         style={styles.meteor}
  //         source={require("../assets/asteroid3.png")}
  //       ></Image>
  //     </Animated.View>
  //     <View style={styles.earthContainer}>
  //       <Image
  //         style={styles.earth}
  //         source={require("../assets/splash.png")}
  //       ></Image>
  //     </View>
  //   </View>
  // );

  return (
    <View>
    <Animated.View
      style={[
        styles.meteorContainer,
        {
          transform: [{ rotate: spin }],
        },
      ]}
    >
      <Image
        style={styles.meteor}
        source={require("../assets/asteroid3.png")}
      ></Image>
    </Animated.View>
    <View style={styles.earthContainer}>
      <Image
        style={styles.earth}
        source={require("../assets/splash.png")}
      ></Image>
    </View>
  </View>
  );
};

export default LoadingScreen;

// const styles = StyleSheet.create({
//   container: {
//     height: 'auto',
//     width: '100%',
//     position: 'relative',
//     // display: 'grid'
//   },
//   // earthContainer: {
//   //   justifyContent: "center",
//   //   alignItems: "center",
//   // },
//   earth: {
//     position: 'relative',
//     height: "100%",
//     width: "100%",
//     // borderWidth: 5,
//   },
//   // meteorContainer: {
//   //   position: "absolute",
//     // top: 65,
//     // left: 178,
//   // },
//   meteor: {
//     position: 'absolute',

//     // height: 350,
//     // width: 30,
//     height: "100%",
//     width: "100%",
//     // borderWidth: 5,
//   },
// });

// working css for iphone 14
const styles = StyleSheet.create({
  earthContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  earth: {
    height: "80%",
    width: "80%",
  },
  meteorContainer: {
    position: "absolute",
    top: 65,
    left: 178,
  },
  meteor: {
    height: 350,
    width: 30,
  },
});
