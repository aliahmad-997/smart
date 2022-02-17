import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Header} from '../Header';
import {Logout} from '../logout';
import styles from './styles';

const Green = () => {
  return (
    <View style={styles.container}>
      <Header title={'Scan Section'} back />
      <View style={{flex: 1 / 3}} />
      <View style={styles.outerCard}>
        <Text style={styles.alert}>Alert..!</Text>
        <Text style={styles.faceDetectedTxt}>Record Added Successfully!</Text>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnTxt}>Scan Again</Text>
        </TouchableOpacity>
      </View>
      <Logout />
    </View>
  );
};

export default Green;
