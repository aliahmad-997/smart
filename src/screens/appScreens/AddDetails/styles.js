import {StyleSheet} from 'react-native';

import {colors} from '../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  detailTxt: {
    fontSize: 22,
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  txtInput: {
    height: 49,
    width: '80%',
    borderWidth: 1.5,
    borderColor: colors.white,
    borderRadius: 20,
    padding: 15,
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'center',
    marginVertical: 8,
    color: colors.white,
  },
  outerCard: {
    borderWidth: 1.5,
    borderColor: colors.white,
    borderRadius: 20,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  btnContainer: {
    height: 35,
    width: '50%',
    backgroundColor: colors.indigo,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '600',
  },
});

export default styles;
