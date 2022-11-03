import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native";

const FlexBoxTry = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={(styles.boxStyle, styles.box1)}>
        <View style={styles.box1_1}></View>
        <View style={styles.box1_2}>
          <Text style={styles.textH1Style}>Welcome To My App</Text>
        </View>
      </View>
      <View style={(styles.boxStyle, styles.box2)}>
        <View style={styles.box2_1}></View>
        <View style={styles.box2_2}></View>
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
    backgroundColor: "#2e83a7",
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
  },
  box1_1: {
    backgroundColor: "purple",
    marginTop: 5,
    height: 80,
    width: 80,
    bottom: 50,
    alignSelf: "center",
  },
  box1_2: {
    //backgroundColor: "purple",
    flex: 0.5,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  box2: {
    //backgroundColor: "green",
    flex: 2.5,
    justifyContent: "flex-end",
    padding: 10,
  },
  box2_1: {
    backgroundColor: "purple",
    marginTop: 5,
    height: 80,
  },
  box2_2: {
    backgroundColor: "purple",
    height: 40,
    marginTop: 5,
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
export default FlexBoxTry;
