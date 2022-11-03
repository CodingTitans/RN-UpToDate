import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native";

const SignIn = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={(styles.boxStyle, styles.box2)}>
        <Text style={styles.textStyle}>Sign In Today And</Text>
        <Text style={styles.textStyle}>Discover What's New!</Text>
        <View style={styles.mainBox}>
          <View style={styles.box1}></View>
          <View style={styles.box1}></View>
        </View>

        <View style={styles.signup}></View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text style={styles.acc_confimation}>
          Create A New Account: Sign Up
        </Text>
        <View style={styles.SkipButton}>
          <View style={styles.SkipSignup}></View>
        </View>
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
  mainBox: {
    justifyContent: "space-evenly",
  },
  box1: {
    backgroundColor: "purple",
    height: 60,
    marginTop: 20,
  },

  box2: {
    //backgroundColor: "green",
    flex: 2.5,
    justifyContent: "flex-start",
    padding: 10,
  },
  signup: {
    backgroundColor: "purple",
    height: 60,
    width: 200,
    marginTop: 40,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 30,
  },
  SkipSignup: {
    backgroundColor: "purple",
    height: 40,
    width: 200,
    marginTop: 40,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    marginBottom: 30,
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
  checkbox: {
    width: 250,
    height: 20,
    justifyContent: "space-evenly",
    alignSelf: "flex-start",
    backgroundColor: "purple",
    marginTop: 10,
  },
  acc_confimation: {
    fontSize: 25,
    textAlign: "center",
    paddingTop: 10,
  },
  horizontalLine: {
    paddingBottom: 10,
  },
  SkipButton: {
    flex: 3,
    // backgroundColor: "black",
    justifyContent: "flex-end",
  },
});
export default SignIn;
