import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native"


const NewsCard = ({ navigation }: { navigation: any }) => {
  return (
    <Pressable onPress={() => navigation.navigate('News')}>
      <View style={styles.wrapper}>
        <ImageBackground source={{ uri: 'https://via.placeholder.com/350x150' }} resizeMode={'cover'} style={styles.image} />
        <View style={styles.contentWrapper}>
          <View>
            <Text style={styles.title}>Card title</Text>
          </View>
            <Text style={styles.body}>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Text>
          <Text>Last updated 3 mins ago</Text>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: "hidden"
  },
  contentWrapper: {
    padding: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  body: {
    marginTop: 12,
    marginBottom: 18
  },
  image: {
    width: "100%",
    height: 200
  }
});

export default NewsCard