import {StyleSheet} from 'react-native';

import {colors} from '../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
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
