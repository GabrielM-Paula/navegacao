import React from 'react';
import { Pressable, View, Text, Image } from 'react-native';

import { styles } from './HomeStyle';

export function Home({navigation}:any) {

  function navToSonic(){
    navigation.navigate('sonic');
  }
  function navToTails(){
    navigation.navigate('tails');
  }
  function navToKnuckles(){
    navigation.navigate('knuckles');
  }
  function navToAmy(){
    navigation.navigate('amy');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Personagens de Sonic</Text>
      <Image source={require('../../assets/capa.png')} />
      
        <Pressable style={styles.botaoSonic}  onPress={navToSonic}>
          <Text style={styles.textoBotao}>Sonic</Text>
        </Pressable>

        <Pressable style={styles.botaoTails} onPress={navToTails}>
          <Text style={styles.textoBotao}>Tails</Text>
        </Pressable>

        <Pressable style={styles.botaoKnuckles} onPress={navToKnuckles}>
          <Text style={styles.textoBotao}>Knuckles</Text>
        </Pressable>

        <Pressable style={styles.botaoAmy} onPress={navToAmy}>
          <Text style={styles.textoBotao}>Amy</Text>
        </Pressable>

    </View>
  );
}


