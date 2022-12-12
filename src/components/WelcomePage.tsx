import { Image, StyleSheet } from "react-native"
import { Container, Row, Col } from "react-bootstrap"

const WelcomePage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column vh-100">
      <Row>
        <Col >
          <Image style={styles.iconStyle} source={require("./../../assets/splash.png")} />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2> UpToDate - News App </h2>
        </Col>
      </Row>
    </Container>
  )
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 250,
    height: 250,
  },
});

export default WelcomePage;