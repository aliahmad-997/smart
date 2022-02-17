import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator, Text} from 'react-native';
import {colors} from '../utils';

export const Loader = () => {
  return (
    <>
      <Modal
        transparent={true}
        animationType={'none'}
        visible={true}
        style={{zIndex: 1100}}
        onRequestClose={() => {}}>
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <Text style={{fontSize: 20}}>Loading...</Text>
            <ActivityIndicator
              size={'large'}
              animating={true}
              color={colors.indigo}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: '50%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
