import React, {useEffect, useState} from 'react';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import SplashScreen from 'react-native-splash-screen';
import { useStateValue } from 'services/auth/hooks';
import { getData } from 'storage/asyncStore';

const Navigation = props => {
  const [{user}, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      return;
    }
    getAuthData();
  }, []);

  const getAuthData = async () => {
    const storedAuth = await getData();
    if (!storedAuth) {
      setLoading(false);
      return;
    }

    dispatch({
      type: 'SET_USER',
      user: true,
    });
    setLoading(false);
  };

  return !loading ? <>{user ? <AppNavigator /> : <AuthNavigator />}</> : null;
};

export default Navigation;
