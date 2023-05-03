import React from "react";

import { Image, Text, StyleSheet, Dimensions, View } from "react-native";

const width = Dimensions.get("screen").width;

//Components
import Texto from "../components/Texto";

//Images
import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";

const Cesta = () => {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      {/*Se colocar o texto em cima da imagme, e mudar pra absolute, ele fica embaixo*/}
      <Texto style={estilos.titulo}>Detalhe da cesta</Texto>
      <View style={estilos.cesta}>
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
      </View>
    </>
  );
};
console.log(topo);
const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
    // fontFamily: "Montserrat"
  },
  titulo: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
  },
  cesta: {
    paddingVertical: 8, //Só existe no react native
    paddingHorizontal: 16,
  },
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

/* Em React Native, a unidade de medida mais comumente usada para o estilo de layout é o "ponto" ou "pixel de densidade independente" (DIP ou DP). 
O DIP é uma unidade de medida que é convertida automaticamente para diferentes densidades de pixels em dispositivos diferentes, 
garantindo que os elementos da interface do usuário tenham o mesmo tamanho e proporção em diferentes dispositivos.*/

export default Cesta;
