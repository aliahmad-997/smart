import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import {images} from '../../../utils';
import styles from './styles';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await auth().signInWithEmailAndPassword(
        userName,
        password,
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      source={images.signinpic}
      style={[styles.container, {width: '100%'}]}>
      <View style={styles.card}>
        <Text style={styles.signin}>Sign In</Text>
        <TextInput
          placeholder="Username"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={'gray'}
          value={userName}
          onChangeText={setUserName}
          style={styles.txtInput}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'gray'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.txtInput}
        />
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => handleSignIn()}>
          <Text style={styles.btnTxt}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotTxt}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Login;
