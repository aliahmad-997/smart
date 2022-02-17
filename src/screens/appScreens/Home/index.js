import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Platform} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {useNavigation} from '@react-navigation/native';

import {images} from '../../../utils';
import {Header, Loader, Logout} from '../../../components';
import styles from './styles';

const Home = () => {
  let navigation = useNavigation();

  const [base64String, setBase64String] = useState();
  const [url, setUrl] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handlePhoto = async () => {
    let permission = null;

    if (Platform.OS === 'ios') {
      permission = await request(PERMISSIONS.IOS.CAMERA);
    } else {
      permission = await request(PERMISSIONS.ANDROID.CAMERA);
    }

    if (permission === 'granted') {
      try {
        const response = await launchCamera({
          mediaType: 'photo',
          quality: 0.5,
          maxHeight: 400,
          maxWidth: 400,
          cameraType: 'back',
          includeBase64: true,
        });
        if (response.assets) {
          setBase64String(response.assets[0].base64);
          setUrl(response.assets[0].uri);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleFaceDetection = async () => {
    setError(false);
    setLoading(true);

    const body = {
      encoded_image: base64String,
    };

    try {
      const response = await fetch(
        'https://faceapi.mxface.ai/api/face/detect',
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
      console.log(responseJson);
      setLoading(false);
      if (responseJson.errorMessage || responseJson[0].quality < 0.8) {
        return setError(true);
      }
      if (responseJson[0].faceRectangle) {
        navigation.navigate('FaceDetected', {
          base64String: base64String,
          url: url,
        });
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Header title={'Scan Section'} />
      <View style={{flex: 1 / 2}} />
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => handlePhoto()}>
          <Image
            source={url ? {uri: url} : images.scanFace}
            resizeMode="cover"
            style={{width: 200, height: 200}}
          />
        </TouchableOpacity>
        {error && (
          <View
            style={{
              height: 35,
              width: '60%',
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 16, color: 'white'}}>
              Face Not Detected
            </Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => handleFaceDetection()}>
          <Text style={styles.btnTxt}>Scan Face</Text>
        </TouchableOpacity>
        <Logout />
      </View>
      {loading && <Loader />}
    </View>
  );
};

export default Home;
