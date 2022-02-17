import {StyleSheet} from 'react-native';

import {colors} from '../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  detailsTxt: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: 10,
  },
  visaTxt: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 15,
  },
  txt: {
    fontSize: 16,
    color: colors.white,
    fontWeight: '500',
    marginStart: 20,
    marginVertical: 10,
  },
  outerCard: {
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 5,
    shadowRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 20,
    width: '80%',
    alignSelf: 'center',
    marginTop: 30,
  },

  innerCard: {
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 30,
    width: '80%',
    alignSelf: 'center',
  },
  btnContainer: {
    height: 35,
    width: '70%',
    backgroundColor: colors.indigo,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  btnTxt: {
    fontSize: 16,
    color: colors.white,
  },
  Txt: {
    fontSize: 12,
    color: colors.white,
    marginLeft: 20,
    marginVertical: 1,
  },
});

export default styles;
