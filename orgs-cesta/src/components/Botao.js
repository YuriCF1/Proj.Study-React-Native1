import React from 'react'

import {TouchableOpacity, StyleSheet} from "react-native"
import Texto from './Texto'

const Botao = ({children}) => {
  return (
    <TouchableOpacity style={estilos.botao}>
        <Texto style={estilos.textoBotao}>{children}</Texto>
    </TouchableOpacity>
  )
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 12,
      },
      textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
      },
})

export default Botao