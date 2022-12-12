import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Container, Row, Col } from 'react-bootstrap';

import NewsCard from "../components/Card";

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <ScrollView style={styles.wrapper}>
      <Container>
        <Row>
          <Col>
            <NewsCard navigation={navigation} />
          </Col>
        </Row>

        {
          [1,2,3,4,5].map(i => (
            <Row key={i} className="mt-3">
              <Col>
                <NewsCard navigation={navigation} />
              </Col>

              <Col>
                <NewsCard navigation={navigation} />
              </Col>
            </Row>
          ))
        }

      </Container>
      
      


      
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