import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import MenuIcon from 'react-native-vector-icons/Feather';
import BackIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import {colors} from '../../utils';
import styles from './styles';

const Header = ({back, title}) => {
  let navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor={'transparent'}
          barStyle={'dark-content'}
        />
        <View style={styles.innerContainer}>
          <MenuIcon name="menu" size={24} color={colors.white} />
          <Text style={styles.txt}>{title}</Text>
        </View>
      </View>
      {back && (
        <BackIcon
          name="arrow-back-outline"
          size={26}
          color={colors.indigo}
          style={{margin: 10}}
          onPress={() => navigation.goBack()}
        />
      )}
    </>
  );
};

export {Header};
