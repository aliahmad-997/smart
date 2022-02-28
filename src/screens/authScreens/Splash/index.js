import React, {useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {images} from '../../../utils';

const Splash = () => {
  let navigation = useNavigation();

  return (
    <ImageBackground source={images.splash} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTxt}>Smart Identity Detection Tool</Text>
      </View>
    </ImageBackground>
  );
};

export default Splash;
