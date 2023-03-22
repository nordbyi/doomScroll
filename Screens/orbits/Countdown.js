import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text } from "react-native";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";

const Countdown = ({yearsUntilEvent, fact, name}) => {
  const [countdown, setCountdown] = useState(yearsUntilEvent * 365 * 24 * 60 * 60)

  useEffect(() => {
    const timerID = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timerID)
  }, [countdown])

  let [fontsLoaded] = useFonts({
    Oswald_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.fact}>{fact}</Text>
      {name !== 'Earth' && <Text style={styles.fact}>A similar DOOM may befall Earth in approximately...</Text>}
      {yearsUntilEvent > 100 && <Text style={styles.countdown}>409,968,753,21</Text>}
      <Text style={styles.countdown}>{countdown.toLocaleString()}</Text>
    </View>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    backgroundColor:  "#e7e5d7",
    borderRadius: 100,
    fontFamily: "Oswald_400Regular",
  },
  countdown: {
    fontSize: 35,
    flexShrink: 1,
    color: 'red',
    fontFamily: "Oswald_400Regular",
  },
  fact: {
    padding: '3%',
    fontSize: 28,
    flexShrink: 1,
    color: "#1e2f42",
    fontFamily: "Oswald_400Regular",
    textAlign: "center",
  }
});
