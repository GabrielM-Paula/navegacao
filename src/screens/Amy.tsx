import { View, Text, Image, Pressable } from "react-native";
import { styles } from "./AmyStyle";

export function Amy({ navigation }: any) {

    function goBack(){
        navigation.navigate('home');
    }



  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Amy Rose</Text>
      <Image source={require("../../assets/amy.png")} style={{ width: 150, height: 150, resizeMode: "contain" }} />

      <Text style={{ margin: 20, fontSize: 16, textAlign: "center" }}>
        Amy é uma ouriça energética que luta com seu martelo Piko Piko. Ela sempre ajuda Sonic e seus amigos.
      </Text>

      <Pressable style={styles.botao} onPress={goBack}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </Pressable>
    </View>
  );
}
