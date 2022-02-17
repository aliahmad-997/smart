import React, {useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {images} from '../../../utils';

const Splash = () => {
  let navigation = useNavigation();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigation.replace('Login');
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <ImageBackground source={images.splash} style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTxt}>Smart Identity Detection Tool</Text>
      </View>
    </ImageBackground>
  );
};

export default Splash;
