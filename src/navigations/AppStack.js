import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/appScreens/Home';
import TravelerDetail from '../screens/appScreens/TravelerDetail';
import AddDetails from '../screens/appScreens/AddDetails';
import FaceDetected from '../screens/appScreens/FaceDetected';
import FaceNotDetected from '../screens/appScreens/FaceNotDetected';
import Red from '../components/Red';
import Green from '../components/Green';
import Yellow from '../components/Yellow';
import Alert from '../components/Alert';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={TravelerDetail} />
      <Stack.Screen name="AddDetails" component={AddDetails} />
      <Stack.Screen name="FaceDetected" component={FaceDetected} />
      <Stack.Screen name="FaceNotDetected" component={FaceNotDetected} />
      <Stack.Screen name="Red" component={Red} />
      <Stack.Screen name="Green" component={Green} />
      <Stack.Screen name="Yellow" component={Yellow} />
      <Stack.Screen name="Added" component={Alert} />
    </Stack.Navigator>
  );
};

export default AppStack;
