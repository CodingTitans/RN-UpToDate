import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

function backgroundClicked() {
  console.log("Page clicked");
}

const WelcomePage = () => {
  const { wrapper, textStyle, clickMeStyle, iconStyle } = styles;
  return (
    <TouchableOpacity style={wrapper} onPress={backgroundClicked}>
      <View style={wrapper}>
        <Text style={textStyle}>Welcome To My Application</Text>
        <Image
          source={{
            width: 300,
            height: 300,
            uri: "https://cdn.pixabay.com/photo/2022/09/02/13/45/paris-7427636_1280.jpg",
          }}
        ></Image>
        <Text
          style={clickMeStyle}
          onPress={() => {
            alert("Get resolution");
            const res = Dimensions.get("window");
            console.log(res);
          }}
        >
          Text Button
        </Text>

        <Button
          title="simple button"
          onPress={() => {
            Alert.alert("Attention!", "Operation successful");
          }}
        />

        <TouchableOpacity
          onPress={() => {
            console.log("Complex Button");
            Alert.alert("Attention!", "Sign out?", [
              {
                text: "Yes",
                onPress: () => {
                  console.log("Do log out");
                },
              },
              {
                text: "No",
                onPress: () => {
                  console.log("Do nothing");
                },
              },
            ]);
          }}
        >
          <Text>Complex Button</Text>
          <Image
            style={iconStyle}
            source={require("./../../assets/favicon.png")}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    padding: 10,
    alignItems: "center",
  },
  textStyle: {
    fontSize: 15,
    textAlign: "center",
  },
  clickMeStyle: {
    margin: 20,
    padding: 10,
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
  },
  iconStyle: {
    width: 50,
    height: 50,
  },
});

export default WelcomePage;
