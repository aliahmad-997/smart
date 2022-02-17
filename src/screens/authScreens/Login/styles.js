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
    // height: 300,
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
  signin: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginVertical: 30,
  },
  txtInput: {
    height: 42,
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 10,
    borderRadius: 20,
    paddingLeft: 15,
    color: 'grey',
  },
  btnContainer: {
    height: 40,
    width: '90%',
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
  forgotTxt: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 20,
  },
});

export default styles;
