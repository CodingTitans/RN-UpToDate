import Card from 'react-bootstrap/Card';
import { StyleSheet } from "react-native"


const NewsCard = ({ navigation }: { navigation: any }) => {
  return (
    <Card onClick={() => navigation.navigate('News')} >
      <Card.Body style={{
        background: "url('//via.placeholder.com/350x150')"
      }}>
        <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.Body>
    </Card>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    padding: 10,
  },
});

export default NewsCard