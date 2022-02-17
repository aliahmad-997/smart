import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';

import {Header, Logout} from '../../../components';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const TravelerDetail = ({route}) => {
  const {data} = route.params;

  let navigation = useNavigation();

  const handleCheck = () => {
    if (data.blocled) {
      navigation.navigate('Red');
    }
    if (!data.blocled && !data.criminalRecord) {
      navigation.navigate('Green');
    }

    if (data.criminalRecord) {
      navigation.navigate('Yellow');
    }
  };

  return (
    <View style={styles.container}>
      <Header title={"Traveler's Details"} back />
      <View style={styles.outerCard}>
        <Text style={styles.detailsTxt}>Detail</Text>
        <View style={styles.innerCard}>
          <ScrollView>
            <Text style={styles.visaTxt}>Visa Status</Text>
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
          </ScrollView>
        </View>

        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => handleCheck()}>
          <Text style={styles.btnTxt}>Pass</Text>
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
    </View>
  );
};

export default TravelerDetail;
