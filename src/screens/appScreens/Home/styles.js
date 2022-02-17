import {StyleSheet} from 'react-native';
import {colors} from '../../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // justifyContent: 'center',
    //alignItems: 'center',
  },
  btnContainer: {
    height: 40,
    width: '70%',
    backgroundColor: colors.indigo,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 15,
  },
  btnTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  logOutTxt: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 20,
  },
});

export default styles;
