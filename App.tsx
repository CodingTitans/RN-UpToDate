import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import PageHeader from "./src/components/Header";
import WelcomePage from "./src/components/WelcomePage";
import SignUp from "./src/pages/SignUp";
import SignIn from "./src/pages/SignIn";
import Preference from "./src/pages/Preference";
import Home from "./src/pages/Home";
import News from "./src/pages/News";
import Icon from "react-native-ionicons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faGlobe,
  faAddressCard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <FontAwesomeIcon color="blue" icon={faHouse} />
            ) : (
              <FontAwesomeIcon icon={faHouse} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Country"
        component={Preference}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <FontAwesomeIcon color="blue" icon={faGlobe} />
            ) : (
              <FontAwesomeIcon icon={faGlobe} />
            );
          },
        }}
      />

      <Tab.Screen
        name="About Us"
        component={News}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <FontAwesomeIcon color="blue" icon={faAddressCard} />
            ) : (
              <FontAwesomeIcon icon={faAddressCard} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={SignIn}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <FontAwesomeIcon color="blue" icon={faUser} />
            ) : (
              <FontAwesomeIcon icon={faUser} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused
                  ? "ion-icon-apps"
                  : "ios-information-circle-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "ios-list" : "ios-list-outline";
              }

              // You can return any component that you like here!
              return <Icon name="ios-home" />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Preference" component={Preference} />
          <Tab.Screen name="news" component={News} />
          <Tab.Screen name="Sign In" component={SignIn} />
          <Tab.Screen name="Sign Up" component={SignUp} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
});
