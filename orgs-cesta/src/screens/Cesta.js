import React from "react";

import { Image, Text, StyleSheet, Dimensions } from "react-native";

import topo from "../../assets/topo.png";

const width = Dimensions.get("screen").width;

const Cesta = () => {
  // return <Text>Cesta</Text>;
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      {/*Se colocar o texto em cima da imagme, e mudar pra absolute, ele fica embaixo*/}
      <Text style={estilos.titulo}>Detalhe da cesta</Text>
    </>
  );
};
console.log(topo);
const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
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
});

/* Em React Native, a unidade de medida mais comumente usada para o estilo de layout é o "ponto" ou "pixel de densidade independente" (DIP ou DP). 
O DIP é uma unidade de medida que é convertida automaticamente para diferentes densidades de pixels em dispositivos diferentes, 
garantindo que os elementos da interface do usuário tenham o mesmo tamanho e proporção em diferentes dispositivos.*/

export default Cesta;
