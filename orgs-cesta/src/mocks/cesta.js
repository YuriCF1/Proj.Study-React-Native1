import logo from "../../assets/logo.png";

//Images itens
import tomateImg from "../../assets/frutas/Tomate.png";
import pepinoImg from "../../assets/frutas/Pepino.png";
import brocolisImg from "../../assets/frutas/Brócolis.png";
import batataImg from "../../assets/frutas/Batata.png";
import aboboraImg from "../../assets/frutas/Abóbora.png";

const cesta = {
  topo: {
    titulo: "Detalhe da cesta",
  },
  detalhes: {
    nome: "Cesta de verduras",
    logoFazenda: logo,
    nomeFazenda: "Jenny Jack Farm",
    descricao:
      "Uma cesta com ótimos produtos selecionados da fazenda, direto para sua cozinha",
    preco: "R$ 40,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        image: tomateImg,
      },
      {
        nome: "Brócolos",
        image: brocolisImg,
      },
      {
        nome: "Batata",
        image: batataImg,
      },
      {
        nome: "Pepino",
        image: pepinoImg,
      },
      {
        nome: "Abóbora",
        image: aboboraImg,
      },
    ],
  },
};

export default cesta;
