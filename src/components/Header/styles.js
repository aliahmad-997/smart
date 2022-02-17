import {StyleSheet, Platform} from 'react-native';
import {colors} from '../../utils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.indigo,
    height: Platform.OS === 'ios' ? 80 : 80,
    justifyContent: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 15,
    justifyContent: 'space-between',
    width: '60%',
  },
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
