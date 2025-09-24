import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './GalleryStyle';

export function Gallery() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>GALLERY</Text>
    </View>
  );
}