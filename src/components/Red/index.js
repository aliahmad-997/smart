import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Header} from '../Header';
import styles from './styles';

const Red = () => {
  return (
    <View style={styles.container}>
      <Header title={'Scan Section'} back />
      <View style={{flex: 1 / 3}} />
      <View style={styles.outerCard}>
        <Text style={styles.alert}>Alert..!</Text>
        <Text style={styles.faceDetectedTxt}>Traveller is Blacklisted</Text>
        <TouchableOpacity style={{alignSelf: 'center', marginVertical: 20}}>
          <Text style={styles.btnTxt}>Done</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{alignSelf: 'center', marginVertical: 20}}>
        <Text style={styles.btnTxt}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Red;
