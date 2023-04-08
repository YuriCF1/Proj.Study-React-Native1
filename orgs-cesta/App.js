// import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
// SafeAreaView = Nos iphones, faz com que a área seja evitada, criando uma margem

import Cesta from "./src/screens/Cesta";

export default function App() {
  return (
    // <View style={styles.container}>
    <SafeAreaView>
      <StatusBar />
      <Cesta />
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
