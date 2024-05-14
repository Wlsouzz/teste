import { Text, View, Image } from "react-native";

import estilo from "./style";

export default function Card({ porcentagem, titulo, imagem, texto, texto2 }) {
  return (
    <View style={estilo.cardTarefa}>
      <Image style={estilo.imagemCard} source={{ uri: imagem }} />

      <View style={{ marginLeft: 15, width: 150 }}>
        <Text style={estilo.tituloCard}>{titulo}</Text>

        <Text style={estilo.textoCard}>{texto}</Text>
        <Text style={estilo.textoCard}>{texto2}</Text>
      </View>

      <Text style={{ fontSize: 25 }}>{porcentagem}</Text>
    </View>
  );
}
