import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import {Header, Loader, Logout} from '../../../components';

const FaceDetected = ({route}) => {
  let navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [docs, setDocs] = useState();
  const {base64String, url} = route.params;

  useEffect(() => {
    handleReadUserData();
  }, []);

  const handleReadUserData = async () => {
    setLoading(true);
    try {
      const result = await firestore().collection('userData').get();
      if (result.docs.length === 0) {
        setLoading(false);
        navigation.navigate('FaceNotDetected', {
          base64String: base64String,
          url: url,
        });
      }
      setDocs(result.docs);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleCompareImages = async () => {
    for (let i = 0; i < docs.length; i++) {
      const body = {
        encoded_image1: base64String,
        encoded_image2: docs[i].data().base64String,
      };
      try {
        const response = await fetch(
          'https://faceapi.mxface.ai/api/face/verify',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              subscriptionkey: 'kpYImQwvHGkgytGx3037',
            },
            body: JSON.stringify(body),
          },
        );
        const responseJson = await response.json();
        if (responseJson.confidence > 0.8) {
          return docs[i].data();
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  const handleCompare = async () => {
    setLoading(true);
    const response = await handleCompareImages();
    setLoading(false);
    if (response) {
      navigation.navigate('Detail', {data: response});
    } else {
      navigation.navigate('FaceNotDetected', {
        base64String: base64String,
        url: url,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title={'Scan Section'} back />
      <View style={{flex: 1 / 3}} />
      <View style={styles.outerCard}>
        <Text style={styles.alert}>Alert !</Text>
        <Text style={styles.faceDetectedTxt}>Face Detected Successfully</Text>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => handleCompare()}>
          <Text style={styles.btnTxt}>Check Identity</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{alignSelf: 'center', marginVertical: 20}}
          onPress={() => navigation.replace('Home')}>
          <Text style={styles.btnTxt}>Scan Again</Text>
        </TouchableOpacity>
      </View>
      <Logout />
      {loading && <Loader />}
    </View>
  );
};

export default FaceDetected;
