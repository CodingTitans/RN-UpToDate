import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SignUp from "./src/components/SignUp";
import SignIn from "./src/components/SignIn";
import Preference from "./src/components/Preference";
import Home from "./src/components/Home";
import Blog from "./src/components/Blog";
import Search from "./src/components/Search";
import SearchResult from "./src/components/SearchResult";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignUp />
      {/* <SignIn /> */}
      {/* <Preference /> */}
      {/* <Home /> */}
      {/* <Blog /> */}
      {/* <Search /> */}
      {/* <SearchResult /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
  },
});
