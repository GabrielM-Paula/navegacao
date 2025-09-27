import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./HomeStyle";

export function Tails({ navigation }: any) {

    function goBack(){
        navigation.navigate('home');
    }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Miles "Tails" Prower</Text>
      <Image source={require("../../assets/tails.png")} style={{ width: 150, height: 150, resizeMode: "contain" }} />

      <Text style={{ margin: 20, fontSize: 16, textAlign: "center" }}>
        Raposinho de duas caudas e melhor amigo do Sonic. Ele pode voar e é um gênio da mecânica.
      </Text>

      <Pressable style={styles.botao} onPress={goBack}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </Pressable>
    </View>
  );
}
