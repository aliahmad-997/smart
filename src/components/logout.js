import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

const Logout = () => {
  const handleLogout = async () => {
    auth().signOut();
  };

  return (
    <TouchableOpacity
      style={{alignSelf: 'center', marginVertical: 10}}
      onPress={() => handleLogout()}>
      <Text style={styles.btnTxt}>Log Out</Text>
    </TouchableOpacity>
  );
};

export {Logout};

const styles = StyleSheet.create({
  btnTxt: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
});
