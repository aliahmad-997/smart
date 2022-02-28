import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

import {Header, Loader} from '../../../components';
import styles from './styles';
import {colors} from '../../../utils';

const Report = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getReport();
  }, []);

  const getReport = async () => {
    try {
      setLoading(true);
      const report = await firestore().collection('report').get();
      setData(report.docs[0].data());
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title={'Manager Section'} />

      <View style={{marginTop: 30}}>
        <Text
          style={{
            fontSize: 16,
            color: colors.white,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          Report
        </Text>
        <Text
          style={{color: colors.white, fontWeight: '900', marginVertical: 5}}>
          Total Passed: <Text>{data?.passPassenger}</Text>
        </Text>
        <Text
          style={{color: colors.white, fontWeight: '900', marginVertical: 5}}>
          Total Blocked: <Text>{data?.Blocked}</Text>
        </Text>
        <Text
          style={{color: colors.white, fontWeight: '900', marginVertical: 5}}>
          Total Not Sure: <Text>{data?.notSure}</Text>
        </Text>
      </View>
    </View>
  );
};

export default Report;
