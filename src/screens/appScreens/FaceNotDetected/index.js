import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {Header, Logout} from '../../../components';

const FaceNotDetected = ({route}) => {
  let navigation = useNavigation();

  const {base64String, url} = route.params;

  return (
    <View style={styles.container}>
      <Header title={'Alert'} back />
      <View style={{flex: 1 / 3}} />
      <View style={styles.outerCard}>
        <Text style={styles.alert}>Alert !</Text>
        <Text style={styles.faceDetectedTxt}>Record Not Found!</Text>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() =>
            navigation.navigate('AddDetails', {
              base64String: base64String,
              url: url,
            })
          }>
          <Text style={styles.btnTxt}>Add Detail Manually</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignSelf: 'center', marginVertical: 20}}>
          <Text style={styles.btnTxt}>Scan Again</Text>
        </TouchableOpacity>
      </View>
      <Logout />
    </View>
  );
};

export default FaceNotDetected;
