import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./KnucklesStyle";

export function Knuckles({ navigation }: any) {

    function goBack(){
        navigation.navigate('home');
    }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Knuckles the Echidna</Text>
      <Image source={require("../../assets/knuckles.png")} style={{ width: 150, height: 150, resizeMode: "contain" }} />

      <Text style={{ margin: 20, fontSize: 16, textAlign: "center" }}>
        Guardião da Master Emerald. É forte, pode planar e escalar paredes.
      </Text>

      <Pressable style={styles.botao} onPress={goBack}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </Pressable>
    </View>
  );
}
