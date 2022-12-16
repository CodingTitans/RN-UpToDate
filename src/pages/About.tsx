import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import FontAwesome from "@expo/vector-icons/FontAwesome"

const About = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View>
          <Text style={{
            marginTop: 16,
            fontSize: 18
          }}>Stay notified... get breaking news FIRST from UptoDate News. With a new updated design, the UptoDate News app lets you watch all the top news stories from our newsroom including your preference news, sports, Technology and latest headlines. There are special features on main stories and key categories to explore to get further depth.</Text>
        </View>

        <View style={styles.mt5}>
          <Text style={styles.textStyle}>Reach Us</Text>
          <View style={{ ...styles.flex, ...styles.mt3 }}>
            <FontAwesome color="blue" name={"phone"} style={styles.icons} />
            <Text style={{ fontSize: 18}}>+1 705 777-7777</Text>
          </View>

          <View style={{ ...styles.flex, ...styles.mt3 }}>
            <FontAwesome color="blue" name={"envelope"} style={styles.icons} />
            <Text style={{ fontSize: 18}}>info@uptodatenews.com</Text>
          </View>
        </View>

        <View style={styles.mt5}>
          <Text style={styles.textStyle}>Drop Us A Line</Text>
          <TextInput placeholder="Full Name" style={styles.inputBox} />
          <TextInput placeholder="Email address" style={styles.inputBox} />
          <TextInput 
            editable multiline 
            numberOfLines={5} 
            placeholder="Message" 
            style={{ ...styles.inputBox, height: 100 }} />

          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                color: "#fff",
              }}
            >Send</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    margin: 10,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 28,
  },
  inputBox: {
    width: "100%",
    height: 50,
    borderBottomColor: "black",
    borderWidth: 1,
    paddingLeft: 20,
    marginTop: 20,
  },
  button: {
    width: "30%",
    padding: 15,
    backgroundColor: "blue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 22,
  },
  mt5: {
    marginTop: 18
  },
  mt3: {
    marginTop: 12
  },
  icons: {
    marginEnd: 12,
    fontSize: 18
  }
})

About.displayName = "About"

export default About;