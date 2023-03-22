import React from "react";
import { StyleSheet, View,} from "react-native";

const Sun = () => {
  return (
    <View style={styles.sun}></View>
  );
};

export default Sun;

const styles = StyleSheet.create({
  sun: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: "#e7e5d7",
    borderRadius: 25,
  }
});
