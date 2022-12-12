import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const bottomNav = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.textStyle}>Header displayed here.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    paddingTop: 50,
    backgroundColor: "#0a4a4b",
  },
  textStyle: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
  },
});

export default bottomNav;
