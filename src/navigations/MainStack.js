import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppStack from '../navigations/AppStack';
import AuthStack from '../navigations/AuthStack';
import Splash from '../screens/authScreens/Splash';
import ManagerView from '../screens/appScreens/ManagerView';
import Report from '../screens/appScreens/Report';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const [user, setUser] = useState();
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);

  async function onAuthStateChanged(user) {
    setLoading(true);
    if (user) {
      const userData = await firestore()
        .collection('user')
        .doc(user?.uid)
        .get();
      if (userData?.data()?.role === 'manager') {
        setUserData('manager');
      }
    } else {
      setUserData(user);
    }
    setUser(user);
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => {
      subscriber;
    };
  }, []);

  if (loading) {
    return <Splash />;
  }

  if (userData === 'manager') {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ManagerView" component={ManagerView} />
        <Stack.Screen name="Report" component={Report} />
      </Stack.Navigator>
    );
  }

  if (user) {
    return <AppStack />;
  } else {
    return <AuthStack />;
  }
};

export default MainStack;
