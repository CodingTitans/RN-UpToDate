import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import WelcomePage from "./src/components/WelcomePage";
import SignUp from "./src/pages/SignUp";
import SignIn from "./src/pages/SignIn";
import Preference from "./src/pages/Preference";
import Home from "./src/pages/Home";
import News from "./src/pages/News";
import About from "./src/pages/About";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import StackNav from "./src/components/StackNav";
import Profile from "./src/pages/Profile";

import FontAwesome from "@expo/vector-icons/FontAwesome"


const Tab = createBottomTabNavigator();

const HomeNav = () => <StackNav components={[Home, News]} />
const PreferenceNav = () => <StackNav components={[Preference, News]} />
const SignInNav = () => <StackNav components={[SignIn, SignUp, Profile]} />


const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNav}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused
              ? <FontAwesome name="home" color={"blue"} />
              : <FontAwesome name="home" />
          }
        }}
      />

      <Tab.Screen
        name="Country"
        component={PreferenceNav}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused
              ? <FontAwesome color="blue" name={"globe"} />
              : <FontAwesome name={"globe"} />
          }
        }}
      />

      <Tab.Screen
        name="About"
        component={About}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused }) => {
            return focused
              ? <FontAwesome color="blue" name={"address-card"} />
              : <FontAwesome name={"address-card"} />
          }
        }}
      />

      <Tab.Screen
        name="Profile"
        component={SignInNav}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused
              ? <FontAwesome color="blue" name={"user"} />
              : <FontAwesome name={"user"} />
          }
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  const [isWelcome, setIsWelcome] = useState(true)

  setTimeout(() => setIsWelcome(false), 1000)


  return (
    <SafeAreaView style={styles.container}>

      {
        isWelcome
          ? (<WelcomePage />)
          : (
            <NavigationContainer>
              <MyTabs />
            </NavigationContainer>
          )
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
