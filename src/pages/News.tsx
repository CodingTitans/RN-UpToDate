import * as React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const News = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.boxStyle}>
        <View style={styles.mainBox}>
          <Image
            style={styles.box2}
            source={{
              uri: "https://www.europarl.europa.eu/resources/library/images/20220323PHT26126/20220323PHT26126_original.jpg",
            }}
          ></Image>
          <Text style={styles.headingLine}>
            Justin Trudeau to remain Prime Minister of Canada
          </Text>
          <Text style={styles.resourceLine}>On Sep 21, 2021 | By NewsRoom</Text>
          <Text style={styles.paragraphLine}>
            Prime Minister Justin Trudeau’s political gamble failed to pay off
            Monday when Canadian voters returned him to office but denied him
            the expanded bloc of power he had been seeking in Parliament.
            Unofficial election results on Monday indicated that while he would
            remain as prime minister, it would again be as the head of a
            minority government. In August, with his approval ratings high, Mr.
            Trudeau called a “snap election,” summoning voters to the polls two
            years before he had to. The goal, he said, was to obtain a strong
            mandate for his Liberal Party to lead the nation out of the pandemic
            and into recovery. Trudeau said he plans to run again when the next
            election is held, which must be by 2025. “As I’ve said a number of
            times, I am planning on continuing to serve Canadians through and
            beyond the next election,” Trudeau said. But there are widespread
            doubts that he will do so, given that he would have been in power
            for 10 years, has seen a drop in his popularity and a rise in
            animosity toward him in much of western Canada. Trudeau is still
            remembered for evoking the prospect of “sunny ways” when he took
            office in 2015 at age 43, the second-youngest Canadian premier ever.
            There have been setbacks since then, but he has been reelected
            twice.
          </Text>
        </View>
        <View style={styles.mainBox}></View>
        <View style={styles.mainBox}></View>
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
  },
  mainBox: {
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },
  box1: {
    backgroundColor: "purple",
    height: 150,
    width: 150,
  },
  box2: {
    backgroundColor: "purple",
    width: 390,
    height: 390,
    marginBottom: 20,
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
  headingLine: {
    fontSize: 29,
    textAlign: "left",
  },
  resourceLine: {
    fontSize: 15,
    textAlign: "left",
    alignSelf: "flex-start",
    padding: 20,
    fontWeight: "bold",
  },
  paragraphLine: {
    fontSize: 16,
    textAlign: "left",
    alignSelf: "flex-start",
    padding: 20,
    fontWeight: "bold",
  },
});
export default News;
