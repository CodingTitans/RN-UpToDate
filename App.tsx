import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import WelcomePage from "./src/components/WelcomePage";
import SignUp from "./src/pages/SignUp";
import SignIn from "./src/pages/SignIn";
import Preference from "./src/pages/Preference";
import Home from "./src/pages/Home";
import News from "./src/pages/News";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faGlobe, faAddressCard, faUser } from "@fortawesome/free-solid-svg-icons";
import StackNav from "./src/components/StackNav";
import Profile from "./src/pages/Profile";

import 'bootstrap/dist/css/bootstrap.min.css';


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
              ? <FontAwesomeIcon color="blue" icon={faHouse} />
              : <FontAwesomeIcon icon={faHouse} />
          }
        }}
      />

      <Tab.Screen 
        name="Country"
        component={PreferenceNav}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused
              ? <FontAwesomeIcon color="blue" icon={faGlobe} />
              : <FontAwesomeIcon icon={faGlobe} />
          }
        }}
      />

      <Tab.Screen 
        name="About Us"
        component={News}
        options={{
          headerShown: true,
          tabBarIcon: ({ focused }) => {
            return focused
              ? <FontAwesomeIcon color="blue" icon={faAddressCard} />
              : <FontAwesomeIcon icon={faAddressCard} />
          }
        }}
      />

      <Tab.Screen 
        name="Profile"
        component={SignInNav}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused
              ? <FontAwesomeIcon color="blue" icon={faUser} />
              : <FontAwesomeIcon icon={faUser} />
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
