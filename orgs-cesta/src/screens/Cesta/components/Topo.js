import React from "react";

import { Image, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;

//Hooks
import Texto from "../../../components/Texto";

//Images
import topo from "../../../../assets/topo.png";

const Topo = ({ titulo }) => {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      {/*Se colocar o texto em cima da imagme, e mudar pra absolute, ele fica embaixo*/}
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
  );
};

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
});

export default Topo;
