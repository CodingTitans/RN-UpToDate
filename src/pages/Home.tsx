import * as React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

import NewsCard from "../components/Card";

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <View>
            <NewsCard navigation={navigation} />
          </View>

          {
            [1, 2, 3, 4, 5].map(i => (
              <View key={i} style={styles.cardContainer}>
                <View style={styles.doubleContainer}>
                  <NewsCard navigation={navigation} />
                </View>

                <View style={styles.doubleContainer}>
                  <NewsCard navigation={navigation} />
                </View>
              </View>
            ))
          }

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  doubleContainer: {
    width: '50%'
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