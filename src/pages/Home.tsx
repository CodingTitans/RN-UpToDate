import * as React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const Home = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.boxStyle}>
        <Text style={styles.textStyle}>Discover What's New!</Text>

        <View style={styles.mainBox}>
          <View style={styles.box2}>
            <Image
              style={styles.box2}
              source={{
                uri: "https://www.europarl.europa.eu/resources/library/images/20220323PHT26126/20220323PHT26126_original.jpg",
              }}
            ></Image>
            <Text style={styles.headlines}>Headline</Text>
          </View>
        </View>
        <View style={styles.mainBox2}>
          <View style={styles.box1}>
            <Image
              style={styles.box1}
              source={{
                uri: "https://www.europarl.europa.eu/resources/library/images/20220323PHT26126/20220323PHT26126_original.jpg",
              }}
            ></Image>
            <Text style={styles.headlines}>Headline</Text>
          </View>
          <View style={styles.box1}>
            <Image
              style={styles.box1}
              source={{
                uri: "https://www.europarl.europa.eu/resources/library/images/20220323PHT26126/20220323PHT26126_original.jpg",
              }}
            ></Image>
            <Text style={styles.headlines}>Headline</Text>
          </View>
        </View>
        <View style={styles.mainBox}>
          <View style={styles.box1}>
            <Image
              style={styles.box1}
              source={{
                uri: "https://www.europarl.europa.eu/resources/library/images/20220323PHT26126/20220323PHT26126_original.jpg",
              }}
            ></Image>
            <Text style={styles.headlines}>Headline</Text>
          </View>
          <View style={styles.box1}>
            <Image
              style={styles.box1}
              source={{
                uri: "https://www.europarl.europa.eu/resources/library/images/20220323PHT26126/20220323PHT26126_original.jpg",
              }}
            ></Image>
            <Text style={styles.headlines}>Headline</Text>
          </View>
        </View>
        <View style={styles.mainBox}>
          <View style={styles.box1}>
            <Image
              style={styles.box1}
              source={{
                uri: "https://www.europarl.europa.eu/resources/library/images/20220323PHT26126/20220323PHT26126_original.jpg",
              }}
            ></Image>
            <Text style={styles.headlines}>Headline</Text>
          </View>
          <View style={styles.box1}>
            <Image
              style={styles.box1}
              source={{
                uri: "https://www.europarl.europa.eu/resources/library/images/20220323PHT26126/20220323PHT26126_original.jpg",
              }}
            ></Image>
            <Text style={styles.headlines}>Headline</Text>
          </View>
        </View>
        <View style={styles.mainBox}>
          <View style={styles.box1}>
            <Image
              style={styles.box1}
              source={{
                uri: "https://www.europarl.europa.eu/resources/library/images/20220323PHT26126/20220323PHT26126_original.jpg",
              }}
            ></Image>
            <Text style={styles.headlines}>Headline</Text>
          </View>
          <View style={styles.box1}>
            <Image
              style={styles.box1}
              source={{
                uri: "https://www.europarl.europa.eu/resources/library/images/20220323PHT26126/20220323PHT26126_original.jpg",
              }}
            ></Image>
            <Text style={styles.headlines}>Headline</Text>
          </View>
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
  mainBox2: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  box1: {
    height: 150,
    ackgroundColor: "purple",
    width: 150,
    marginTop: 20,
  },
  box2: {
    backgroundColor: "purple",
    width: 350,
    height: 350,
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
  headlines: {
    fontSize: 20,
    color: "#fff",
    marginTop: -40,
    marginLeft: 20,
    fontWeight: "bold",
  },
});
export default Home;
