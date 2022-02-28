import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';

import {Header, Logout} from '../../../components';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';

const TravelerDetail = ({route}) => {
  const {data, base64String, url, id} = route.params;

  let navigation = useNavigation();

  const report = firestore().collection('report').doc('TyBkcUhWdhk38O4dF5JM');

  const handleCheck = async () => {
    if (data.blocled) {
      report.update({
        Blocked: firestore.FieldValue.increment(1),
      });
      navigation.navigate('Red');
    }
    if (!data.blocled && !data.criminalRecord) {
      report.update({
        passPassenger: firestore.FieldValue.increment(1),
      });
      navigation.navigate('Green');
    }

    if (data.criminalRecord && !data.blocled) {
      report.update({
        notSure: firestore.FieldValue.increment(1),
      });
      navigation.navigate('Yellow');
    }
  };

  return (
    <View style={styles.container}>
      <Header title={"Traveler's Details"} back />
      <ScrollView>
        <View style={styles.outerCard}>
          <Text style={styles.detailsTxt}>Detail</Text>
          <View style={styles.innerCard}>
            <Text style={styles.visaTxt}>Traveler Information</Text>
            <Text style={styles.Txt}>{data.visaStatus}</Text>
            <Text style={styles.txt}>Name</Text>
            <Text style={styles.Txt}>{data.name}</Text>
            <Text style={styles.txt}>ID No</Text>
            <Text style={styles.Txt}>{data.idNo}</Text>
            <Text style={styles.txt}>Passport No</Text>
            <Text style={styles.Txt}>{data.passport}</Text>
            <Text style={styles.txt}>Age</Text>
            <Text style={styles.Txt}>{data.age}</Text>
            <Text style={styles.txt}>Nationality</Text>
            <Text style={styles.Txt}>{data.nationality}</Text>
            <Text style={styles.txt}>Arrival Date</Text>
            <Text style={styles.Txt}>{data.arrival}</Text>
            <Text style={styles.txt}>Departure Date</Text>
            <Text style={styles.Txt}>{data.departure}</Text>
          </View>

          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => handleCheck()}>
            <Text style={styles.btnTxt}>Pass</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() =>
              navigation.navigate('AddDetails', {
                data: data,
                base64String: base64String,
                url: url,
                screen: 'Detail',
                id: id,
              })
            }>
            <Text style={styles.btnTxt}>Edit</Text>
          </TouchableOpacity>
          <View style={{position: 'absolute', right: 40, top: 90}}>
            <Image
              source={{
                uri: data.downloadUrl,
              }}
              style={{height: 80, width: 80, borderRadius: 80 / 2}}
            />
          </View>
        </View>
        <Logout />
      </ScrollView>
    </View>
  );
};

export default TravelerDetail;
