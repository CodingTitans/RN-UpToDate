import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native";

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={(styles.boxStyle, styles.box1)}>
        <View style={styles.box1_1}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
  },
  boxStyle: {
    padding: 10,
    margin: 10,
  },
  box1: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  box1_1: {
    backgroundColor: "purple",
    marginTop: 5,
    height: 200,
    width: 200,
    bottom: 50,
    alignSelf: "center",
  },

  defaultContainer: {
    flex: 1,
    backgroundColor: "#ededed",
    padding: 20,
    margin: 20,
  },

  //text styles

  textH1Style: {
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontWeight: "700",
      },
      android: {
        fontSize: 30,
        fontWeight: "bold",
      },
    }),
    color: "white",
  },
});
export default SplashScreen;
