import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import PageHeader from "./src/components/Header";
import WelcomePage from "./src/components/WelcomePage";
import SplashScreen from "./src/components/SplashScreen";
import SignUp from "./src/components/SignUp";
import SignIn from "./src/components/SignIn";
import Preference from "./src/components/Preference";
import Home from "./src/components/Home";
import Blog from "./src/components/Blog";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
// import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faHouse} />
        }}
      />
      <Tab.Screen name="Settings" component={Blog} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {/* <SplashScreen /> */}

        <MyTabs />
        {/* <SignUp></SignUp> */}
        {/* <SignIn></SignIn> */}
        {/* <Preference></Preference> */}
        {/* <Home></Home> */}
        {/* <Blog></Blog> */}

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
