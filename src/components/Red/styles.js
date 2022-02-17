import {StyleSheet} from 'react-native';

import {colors} from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  outerCard: {
    borderWidth: 1.5,
    borderColor: colors.white,
    borderRadius: 20,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'red',
  },
  alert: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  faceDetectedTxt: {
    fontSize: 24,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  btnContainer: {
    height: 35,
    backgroundColor: colors.indigo,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  btnTxt: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '600',
  },
});

export default styles;
