// import React from 'react'
import { Text, StyleSheet } from "react-native";

const Texto = ({ children, style }) => {
  let estilo = estilos.texto;
  if (style?.fontWeight === "bold") {
    estilo = estilos.textoNegrito;
  }

  return <Text style={[style, estilo]}>{children}</Text>;
};

const estilos = StyleSheet.create({
  texto: {
    fontFamily: "MontRegular",
  },
  textoNegrito: {
    fontFamily: "MontB",
    fontWeight: "normal" //
  },
});

export default Texto;
