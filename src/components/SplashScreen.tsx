import React from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={{}} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  },
  tinyLogo: {
    height: 'auto',
    width: '100%'
  },
});
export default SplashScreen;
