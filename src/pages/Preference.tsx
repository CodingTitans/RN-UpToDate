import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
  Image,
} from "react-native";

const Preference = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.boxStyle}>
        <Text style={styles.textStyle}>Choose Your Preferred Country</Text>

        <View style={styles.mainBox}>
          <Image
            style={styles.box1}
            source={{
              uri: "https://i.etsystatic.com/21355405/r/il/551422/2122665115/il_570xN.2122665115_5yl9.jpg",
            }}
          ></Image>
          <Image
            style={styles.box1}
            source={{
              uri: "https://cdn.pixabay.com/photo/2013/07/13/12/13/flag-159416__340.png",
            }}
          ></Image>
        </View>
        <View style={styles.mainBox}>
          <Image
            style={styles.box1}
            source={{
              uri: "https://vectorflags.s3.amazonaws.com/flags/pe-square-01.png",
            }}
          ></Image>
          <Image
            style={styles.box1}
            source={{
              uri: "https://vectorflags.s3-us-west-2.amazonaws.com/flags/bd-square-01.png",
            }}
          ></Image>
        </View>
        <View style={styles.mainBox}>
          <Image
            style={styles.box1}
            source={{
              uri: "https://vectorflags.s3.amazonaws.com/flags/sg-square-01.png",
            }}
          ></Image>
          <Image
            style={styles.box1}
            source={{
              uri: "https://vectorflags.s3.amazonaws.com/flags/de-square-01.png",
            }}
          ></Image>
        </View>
        <View style={styles.mainBox}>
          <Image
            style={styles.box1}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/300/300177.png",
            }}
          ></Image>
          <Image
            style={styles.box1}
            source={{
              uri: "https://media.istockphoto.com/id/1145814106/vector/national-argentina-flag-vector-illustration.jpg?b=1&s=612x612&w=0&k=20&c=r_doldjbO-dYZ6GyYYBlpfT9JII38yhQS42Hsv2z2sM=",
            }}
          ></Image>
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
