import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Logout} from '../logout';
import {Header} from '../Header';
import styles from './styles';

const Yellow = () => {
  return (
    <View style={styles.container}>
      <Header title={'Scan Section'} back />
      <View style={{flex: 1 / 3}} />
      <View style={styles.outerCard}>
        <Text style={styles.alert}>Alert..!</Text>
        <Text style={styles.faceDetectedTxt}>
          Traveller identity not sure 70%
        </Text>
        <TouchableOpacity style={{alignSelf: 'center', marginVertical: 20}}>
          <Text style={[styles.btnTxt, {color: 'black'}]}>Done</Text>
        </TouchableOpacity>
      </View>
      <Logout />
    </View>
  );
};

export default Yellow;
