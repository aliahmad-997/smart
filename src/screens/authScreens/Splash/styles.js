import {StyleSheet} from 'react-native';
import {colors} from '../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: colors.black,
    height: 300,
    width: '70%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 5,
  },
  cardTxt: {
    fontSize: 22,
    lineHeight: 28,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
