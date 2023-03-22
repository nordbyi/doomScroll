import React, { useState, useEffect, useRef } from "react";
import { Animated, StyleSheet, View, Pressable, Easing } from "react-native";
import Asteroid from "./Asteroid";
import { orbit, spin, spinToTop } from "./helperFunctions";

const Mercury = () => {
  const [color, setColor] = useState("#e7e5d7");
  const timeoutID = useRef("");

  const widthValue = useRef(new Animated.Value(12)).current;
  const heightValue = useRef(new Animated.Value(12)).current;
  const z_Index = useRef("auto");

  useEffect(() => {
    mercuryOrbit.start();
  }, []);

  const expand = Animated.timing(widthValue, {
    toValue: 390,
    duration: 200,
    easing: Easing.linear,
    useNativeDriver: false,
  });

  const contract = Animated.timing(widthValue, {
    toValue: 12,
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
    toValue: 12,
    duration: 400,
    easing: Easing.linear,
    useNativeDriver: false,
  });

  const spinValue = useRef(new Animated.Value(0)).current;

  const mercuryOrbit = orbit(spinValue, 4000);

  const mercurySpinToTop = spinToTop(spinValue);

  const mercurySpin = spin(spinValue);

  return (
    <Pressable
      style={[styles.pressable, { zIndex: z_Index.current}]}
      onPressIn={() => {
        setColor("red");
        mercuryOrbit.stop();
        mercurySpinToTop.start();
        timeoutID.current = setTimeout(() => {
          expand.start();
          expandHeight.start();
        }, 500);
        z_Index.current = 999;
      }}
      onPressOut={() => {
        clearTimeout(timeoutID.current)
        setColor("#e7e5d7");
        mercuryOrbit.start();
        contract.start();
        contractHeight.start();
        z_Index.current = "auto";
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
        <Animated.View
          style={[
            styles.mercury,
            { width: widthValue },
            { height: heightValue },
          ]}
        >
          <Asteroid radius={12}/>
        </Animated.View>
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
    alignItems: 'center',

  },
  mercury: {
    position: "absolute",
    top: -6,
    // left: 42,
    backgroundColor: "#e7e5d7",
    width: 12,
    height: 12,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

// const [color, setColor] = useState("#e7e5d7");
//   const timeoutID = useRef('')

//   useEffect(() => {
//     marsOrbit.start();
//   }, []);

//   const widthValue = useRef(new Animated.Value(18)).current;
//   const heightValue = useRef(new Animated.Value(18)).current;
//   const z_Index = useRef('auto')

//   const expand = Animated.timing(widthValue, {
//     toValue: 390,
//     duration: 200,
//     easing: Easing.linear,
//     useNativeDriver: false,
//   })

//   const contract = Animated.timing(widthValue, {
//     toValue: 18,
//     duration: 400,
//     easing: Easing.linear,
//     useNativeDriver: false,
//   })

//   const expandHeight = Animated.timing(heightValue, {
//     toValue: 450,
//     duration: 200,
//     easing: Easing.linear,
//     useNativeDriver: false,
//   })
//   const contractHeight = Animated.timing(heightValue, {
//     toValue: 18,
//     duration: 400,
//     easing: Easing.linear,
//     useNativeDriver: false,
//   })

//   const spinValue = useRef(new Animated.Value(0)).current;

//   const marsOrbit = orbit(spinValue, 15000);

//   const marsSpinToTop = spinToTop(spinValue);

//   const marsSpin = spin(spinValue);

//   return (
//     <Pressable
//       style={[styles.pressable, { zIndex: z_Index.current}]}
//       onPressIn={() => {
//         setColor("red");
//         marsOrbit.stop();
//         marsSpinToTop.start();
//         timeoutID.current = setTimeout(() => {
//           expand.start()
//           expandHeight.start()
//         }, 500)
//         z_Index.current = 999
//       }}
//       onPressOut={() => {
//         clearTimeout(timeoutID.current)
//         setColor("#e7e5d7");
//         marsOrbit.start();
//         contract.start()
//         contractHeight.start()
//         z_Index.current = 'auto'
//       }}
//     >
//       <Animated.View
//         style={[
//           { borderColor: color },
//           styles.orbitMars,
//           {
//             transform: [{ rotate: marsSpin }],
//           },
//         ]}
//       >
//         <Animated.View
//           style={[
//             styles.mars,
//             { width: widthValue },
//             { height: heightValue },
//           ]}
//         />
//       </Animated.View>
//     </Pressable>
//   );
// };

// export default Mars;

// const styles = StyleSheet.create({
//   pressable: {
//     position: "absolute",
//     width: 450,
//     height: 450,
//   },
//   orbitMars: {
//     position: "absolute",
//     width: 450,
//     height: 450,
//     // borderStyle: "dashed",
//     // borderColor: "#e7e5d7",
//     borderWidth: 2,
//     borderRadius: 225,
//     alignItems: 'center',
//     zIndex: 1
//   },
//   mars: {
//     position: "absolute",
//     top: -9,
//     // left: 215,
//     backgroundColor:  "#e7e5d7",
//     // width: 18,
//     // height: 18 ,
//     borderRadius: 9,
//     zIndex: 1
//   },
// });
