import React from "react";

import { Image, StyleSheet, View } from "react-native";

import Texto from "../../../components/Texto";

const Itens = ({ titulo, lista }) => {
  return (
    <>
      <Texto style={estilos.titulo}>{titulo}</Texto>
      {lista.map(({ nome, image }) => {
        return (
          <View key={nome} style={estilos.item}>
            <Image source={image} style={estilos.image}></Image>
            <Texto style={estilos.nome}>{nome}</Texto>
          </View>
        );
      })}
    </>
  );
};

const estilos = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "Bold",
    marginTop: 32,
    fontSize: 20,
    lineHeight: 32,
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 16,
    alignItems: "center"
  }, 
  image: {
    width: 46,
    height: 46
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646"
  },  

});

export default Itens;
