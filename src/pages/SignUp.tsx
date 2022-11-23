import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform, TextInput, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";


const SignUp = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.textStyle}>Sign Up Today And Discover Your Preffered News!</Text>
      <TextInput placeholder={'First Name'} style={styles.inputBox}></TextInput>
      <TextInput placeholder={'Last Name'} style={styles.inputBox}></TextInput>
      <TextInput placeholder={'Email Address'} style={styles.inputBox}></TextInput>
      <TextInput placeholder={'Phone Number'} style={styles.inputBox}></TextInput>
      <TextInput placeholder={'Password'} style={styles.inputBox}></TextInput>
      <TextInput placeholder={'Date of Birth'} style={styles.inputBox}></TextInput>

      <BouncyCheckbox 
        onPress={(isChecked: boolean) => {}}
        fillColor="blue"
        unfillColor="#fff"
        text="Terms & Conditions"
        style={{
          marginTop: 20
        }} 
      />

      <TouchableOpacity style={{
        width: '70%',
        padding: 10,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20
      }}>
        <Text style={{
          color: '#fff'
        }}>Sign up</Text>
      </TouchableOpacity>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginTop: 40,
          marginBottom: 40
        }}
      />

      <Text style={styles.accountConfimation}>
        Already Have An Account? Sign In
      </Text>

      <TouchableOpacity style={styles.skipSignup}>
        <Text style={{
          color: '#fff',
          fontSize: 14
        }}>Skip Sign Up</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    padding: 10
  },
  textStyle: {
    fontSize: 32,
    textAlign: "center",
  },
  inputBox: {
    width: '100%',
    height: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 20
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
  accountConfimation: {
    fontSize: 14,
    textAlign: "center",
  },
  skipSignup: {
    backgroundColor: "blue",
    height: 40,
    width: 150,
    marginTop: 20,
    justifyContent: "center",
    alignItems: 'center',
    alignSelf: "flex-end",
    marginBottom: 30,
    borderRadius: 30
  },
});
export default SignUp;