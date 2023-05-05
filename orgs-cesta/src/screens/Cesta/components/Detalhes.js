import React from "react";

//React
import Texto from "../../../components/Texto";

//Hooks
import { Image, View, StyleSheet } from "react-native";

//Images
import logo from "../../../../assets/logo.png";


const Detalhes = () => {
  return (
    <>
      <Texto style={estilos.nome}>Cesta de verduras</Texto>
      <View style={estilos.fazenda}>
        <Image source={logo} style={estilos.imagemFazenda} />
        <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
      </View>
      <Texto style={estilos.descricao}>
        Uma cesta com ótimos produtos selecionados da fazenda, direto para sua
        cozinha
      </Texto>
      <Texto style={estilos.preco}>R$ 40,00</Texto>
    </>
  );
};

const estilos = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
    // fontFamily: "MontB",
  },
  fazenda: {
    // display: "flex", //No react native, o display flex é padrão. Não preciso declarar isso
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});

export default Detalhes;
