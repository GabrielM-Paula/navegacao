import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./HomeStyle";

export function Sonic({ navigation }: any){

  function goBack(){
    navigation.navigate('home');
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sonic the Hedgehog</Text>
      <Image source={require("../../assets/sonic.png")} style={{ width: 150, height: 150, resizeMode: "contain" }} />

      <Text style={{ margin: 20, fontSize: 16, textAlign: "center" }}>
        O ouriço azul mais veloz do mundo! Ele é corajoso e luta contra Dr. Eggman para proteger seus amigos.
      </Text>

      <Pressable style={styles.botao} onPress={goBack}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </Pressable>
    </View>
  );

}