import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text } from "react-native";

const Countdown = ({yearsUntilEvent, fact}) => {
  const [countdown, setCountdown] = useState(yearsUntilEvent * 365 * 24 * 60 * 60) // calculate time left until doom event

  useEffect(() => {
    const timerID = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timerID)
  }, [countdown])

  return (
    <View style={styles.container}>
      <Text style={styles.fact}>{fact}</Text>
      <Text style={styles.fact}>A similar DOOM will befall Earth in approximately...</Text>
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
    borderRadius: 100
  },
  countdown: {
    fontSize: 35,
    flexShrink: 1,
    color: 'red'
  },
  fact: {
    padding: '5%',
    fontSize: 28,
    flexShrink: 1,
    color: "#1e2f42"
  }
});
