import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Container, Row, Col } from "react-bootstrap"

const News = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <Container className="mt-2">
        <Row>
          <Col>
            <Image source={{ uri: "//via.placeholder.com/350x150" }} style={ styles.image } />
          </Col>
        </Row>

        <Row className="mt-1">
          <Col>
            <Text style={styles.resourceLine}>On Sep 21, 2021 | By NewsRoom</Text>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Text style={styles.headingLine}>
              Justin Trudeau to remain Prime Minister of Canada
            </Text>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
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
          </Col>
        </Row>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
  },
  headingLine: {
    fontSize: 29,
    textAlign: "left",
  },
  resourceLine: {
    fontSize: 15,
    textAlign: "left",
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
  paragraphLine:{
    fontSize: 16,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  image: {
    height: 250,
    width: "100%"
  }
});

News.displayName = "News"

export default News;