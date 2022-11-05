import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SplashScreen from "./src/components/SplashScreen";
import SignUp from "./src/components/SignUp";
import SignIn from "./src/components/SignIn";
import Preference from "./src/components/Preference";
import Home from "./src/components/Home";
import Blog from "./src/components/Blog";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <SplashScreen /> */}
      <SignUp />
      {/* <SignIn /> */}
      {/* <Preference /> */}
      {/* <Home /> */}
      {/* <Blog /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
});
