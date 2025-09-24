import React from 'react';
import { Pressable, View, Text, Image } from 'react-native';

import { styles } from './HomeStyle';

export function Home({navigation}:any) {

  function navToGallery(){
    navigation.navigate('gallery');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Personagens de Sonic</Text>
      <Image source={require('../../assets/capa.png')} />
      
        <Pressable style={styles.botao} onPress={navToGallery}>
            <Text style={styles.textoBotao}>Ir para a Galleria</Text>
        </Pressable>
    </View>
  );
}


// import React from 'react'; import { Pressable, View, Text } from 'react-native';

// import { styles } from './HomeStyle';

// export function Home({navigation}:any) {

// function navToGallery(){ navigation.navigate('gallery'); } return ( HOME Ir para a Galleria ); }