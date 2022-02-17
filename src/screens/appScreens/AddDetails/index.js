import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import {Header} from '../../../components';
import {colors} from '../../../utils';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const AddDetails = ({route}) => {
  const [visaStatus, setVisaStatus] = useState('');
  const [name, setName] = useState('');
  const [idNo, setIdNo] = useState('');
  const [passport, setPassport] = useState('');
  const [age, setAge] = useState('');
  const [nationality, setNationality] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');

  const {base64String, url} = route.params;

  let navigation = useNavigation();

  const handleClear = () => {
    setVisaStatus('');
    setName('');
    setIdNo('');
    setPassport('');
    setAge('');
    setNationality('');
    setDeparture('');
    setArrival('');
  };

  const uploadImage = async () => {
    try {
      const ref = storage().ref(`/${url}`);
      const upload = await ref.putFile(url);
      const downloadUrl = await storage().ref(url).getDownloadURL();

      const addData = await firestore()
        .collection('userData')
        .add({
          visaStatus: visaStatus,
          name: name,
          idNo: idNo,
          passport: passport,
          age: age,
          nationality: nationality,
          departure: departure,
          arrival: arrival,
          blocled: false,
          criminalRecord: false,
          base64String: base64String,
          downloadUrl: downloadUrl,
        })
        .then(() => {
          alert('Data Added successfully');
          handleClear();
          navigation.navigate('Added');
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Header title={'Manual Detail'} back />
      <ScrollView>
        <View style={styles.outerCard}>
          <Text style={styles.detailTxt}>Detail</Text>
          <TextInput
            placeholder="Visa Status"
            placeholderTextColor={colors.white}
            value={visaStatus}
            onChangeText={setVisaStatus}
            style={styles.txtInput}
          />
          <TextInput
            placeholder="Name"
            placeholderTextColor={colors.white}
            value={name}
            onChangeText={setName}
            style={styles.txtInput}
          />
          <TextInput
            placeholder="ID No"
            placeholderTextColor={colors.white}
            value={idNo}
            onChangeText={setIdNo}
            style={styles.txtInput}
          />
          <TextInput
            placeholder="Passport No"
            placeholderTextColor={colors.white}
            value={passport}
            onChangeText={setPassport}
            style={styles.txtInput}
          />
          <TextInput
            placeholder="Age"
            placeholderTextColor={colors.white}
            value={age}
            onChangeText={setAge}
            style={styles.txtInput}
          />
          <TextInput
            placeholder="Nationality"
            placeholderTextColor={colors.white}
            value={nationality}
            onChangeText={setNationality}
            style={styles.txtInput}
          />
          <TextInput
            placeholder="Departure Date"
            placeholderTextColor={colors.white}
            value={departure}
            onChangeText={setDeparture}
            style={styles.txtInput}
          />
          <TextInput
            placeholder="Arrival Date"
            placeholderTextColor={colors.white}
            value={arrival}
            onChangeText={setArrival}
            style={styles.txtInput}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '80%',
              alignSelf: 'center',
              marginVertical: 10,
            }}>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => uploadImage()}>
              <Text style={styles.btnTxt}>{`Add & Pass`}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleClear()}>
              <Text style={styles.btnTxt}>Clear All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={{alignSelf: 'center', marginTop: 10}}>
          <Text style={styles.btnTxt}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AddDetails;
