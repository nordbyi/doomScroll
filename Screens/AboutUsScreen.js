import { StyleSheet, Text, View, Linking } from "react-native";
import React from "react";
import LoadingScreen from "./LoadingScreen";

export default function AboutUsScreen() {
  return (
    <View style={styles.screen}>
      <LoadingScreen></LoadingScreen>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Angie Staffieri:{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://www.linkedin.com/in/angie-staffieri-372aa07/")}>
            LinkedIn &{" "}
          </Text>
          <Text style={styles.link} onPress={() => Linking.openURL("https://github.com/arstaffieri")}>
            GitHub
          </Text>
        </Text>
        <Text style={styles.text}>
          Blanche Haddad:{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://www.linkedin.com/in/blanche-haddad-denver/")}>
            LinkedIn &{" "}
          </Text>
          <Text style={styles.link} onPress={() => Linking.openURL("https://github.com/BHaddad1")}>
            GitHub
          </Text>
        </Text>
        <Text style={styles.text}>
          Ian Nordby:{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL("https://www.linkedin.com/in/iannordby/")}>
            LinkedIn &{" "}
          </Text>
          <Text style={styles.link} onPress={() => Linking.openURL("https://github.com/nordbyi")}>
            GitHub
          </Text>
        </Text>
        <Text style={[styles.text, styles.josephine]}>
          Josephine Heidepreim:{" "}
          <Text style={styles.link} onPress={() => Linking.openURL("https://www.linkedin.com/in/josephine-heidepriem/")}>
            LinkedIn &{" "}
          </Text>
          <Text style={styles.link} onPress={() => Linking.openURL("https://github.com/jheidepriem")}>
            GitHub
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#020d19",
    height: "100%",
  },
  text: {
    color: "#e7e5d7",
    flexShrink: 1,
    fontFamily: "Oswald_400Regular",
    fontSize: 25,
    marginLeft: 15,
    textAlign: "center",
  },
  textContainer: {
    bottom: 150,
    position: "absolute",
    textAlign: "center",
    width: "100%",
  },
  link: {
    textDecorationLine: "underline"
  },
  josephine: {
    fontSize: 25,
    paddingLeft: 10,
    paddingRight: 10
  }
});
