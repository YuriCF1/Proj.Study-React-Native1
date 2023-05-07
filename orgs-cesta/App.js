// import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, StatusBar, View, Text } from "react-native";
// SafeAreaView = Nos iphones, faz com que a área seja evitada, criando uma margem

//Fonts
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";

// import Cesta from "./src/screens/Cesta/Cesta";
import Cesta from "./src/screens/Cesta"; //Direcionando só a pasta da Cesta, o react vai atrás do index.js

//Mocks
import mock from './src/mocks/cesta'

export default function App() {
  let [fonteCarregada] = useFonts({
    MontRegular: Montserrat_400Regular,
    MontB: Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <View />;
  }

  return (
    // <View style={styles.container}>
    <SafeAreaView>
      <StatusBar />
      {/* <Cesta cesta={mock}/> */}
      {/* Passando o topo e detalhes, iterando */}
      <Cesta {...mock}/> 
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
