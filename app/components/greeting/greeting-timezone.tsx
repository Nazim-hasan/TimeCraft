import {View} from 'react-native';
import React, { useCallback, useState } from 'react';
import Text from 'components/shared/text/Text';
import {getGreetingTime, getNameFromEmail} from 'services/helper/utils';
import { getData } from 'storage/asyncStore';
import { useFocusEffect } from '@react-navigation/native';

export const GreetingTimezone = () => {
  const [email, setEmail] = useState('');
  const getUserEmail = async () => {
    const email = await getData();
    setEmail(email);
  };
  useFocusEffect(
    useCallback(() => {
      getUserEmail();
    }, []),
  );

  return <Text preset="RegularXl">Good {getGreetingTime()}, {getNameFromEmail(email)}</Text>;
};
