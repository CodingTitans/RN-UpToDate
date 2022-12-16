import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";

const SignIn = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.textStyle}>
        Sign in today and
      </Text>
      <Text style={styles.textStyle}>
        Discover What's New!
      </Text>

      <TextInput placeholder="Your email address" style={styles.inputBox} />
      <TextInput placeholder="Password" style={styles.inputBox} />

      <TouchableOpacity
        style={{
          width: "30%",
          padding: 15,
          backgroundColor: "blue",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 22,
        }}
      >
        <Text
          style={{
            color: "#fff",
          }}
        >
          Sign in
        </Text>
      </TouchableOpacity>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginVertical: 40,
        }}
      />

      <Text style={styles.accConfimation}>Don't have an account?
        <Text onPress={() => navigation.navigate('SignUp')}> Sign Up</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    margin: 10,
  },
  textStyle: {
    fontSize: 29,
    textAlign: "center",
  },
  inputBox: {
    width: "100%",
    height: 50,
    borderBottomColor: "black",
    borderWidth: 1,
    paddingLeft: 20,
    marginTop: 20,
  },
  signup: {
    backgroundColor: "purple",
    height: 60,
    width: 200,
    marginTop: 40,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 30,
  },
  accConfimation: {
    fontSize: 14,
    textAlign: "center",
    paddingTop: 8,
  },
  skipSignup: {
    backgroundColor: "blue",
    height: 40,
    width: 150,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",

    marginBottom: 30,
    borderRadius: 30,
  },
});

SignIn.displayName = "SignIn"

export default SignIn;