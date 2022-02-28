import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {Header, Logout} from '../../../components';
import styles from './styles';

const ManagerView = () => {
  let navigation = useNavigation();

  return (
    <>
      <Header title={'Manager Section'} />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => navigation.navigate('Report')}>
          <Text style={styles.btnTxt}>Generate Report</Text>
        </TouchableOpacity>
        <Logout />
      </View>
    </>
  );
};

export default ManagerView;
