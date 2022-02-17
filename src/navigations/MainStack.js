import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

import AppStack from '../navigations/AppStack';
import AuthStack from '../navigations/AuthStack';

const MainStack = () => {
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => {
      subscriber;
    };
  }, []);

  if (user) {
    return <AppStack />;
  } else {
    return <AuthStack />;
  }
};

export default MainStack;
