import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
} from "react-native";

const Preference = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.boxStyle}>
        <Text style={styles.textStyle}>Choose Your Preference</Text>

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
export default Preference;
