import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Home = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.boxStyle}>
        <Text style={styles.textStyle}>Discover What's New!</Text>

        <View style={styles.mainBox}>
          <View style={styles.box2}></View>
        </View>
        <View style={styles.mainBox}>
          <View style={styles.box1}></View>
          <View style={styles.box1}></View>
        </View>
        <View style={styles.mainBox}>
          <View style={styles.box1}></View>
          <View style={styles.box1}></View>
        </View>
        <View style={styles.mainBox}>
          <View style={styles.box1}></View>
          <View style={styles.box1}></View>
        </View>
        <View style={styles.mainBox}>
          <View style={styles.box1}></View>
          <View style={styles.box1}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
  },
  boxStyle: {
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  mainBox: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  box1: {
    backgroundColor: "purple",
    height: 150,
    width: 150,
    marginTop: 20,
  },
  box2: {
    backgroundColor: "purple",
    width: 350,
    height: 350,
    marginTop: 20,
  },

  defaultContainer: {
    flex: 1,
    backgroundColor: "#ededed",
    padding: 20,
    margin: 20,
  },
  textStyle: {
    fontSize: 29,
    textAlign: "center",
  },
});

Home.displayName = "Home"

export default Home;