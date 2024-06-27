import {View, Text, Pressable} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Screen} from 'layout/shared/screen/Screen';
import {commonStyles} from 'libs/shared/ui/styleSheet';
import {
  ExitIconWrapper,
  PersonIconWrapper,
  PersonalInfoContainer,
  ProfileScreenStyles,
  RestInfo,
  UserEmail,
} from './styled';
import {useAuthFunction} from 'services/auth/hooks';
import {PersonIcon} from 'assets/icons/Person';
import {ExitIcon} from 'assets/icons/Exit';
import {getData} from 'storage/asyncStore';
import {useFocusEffect} from '@react-navigation/native';

const ProfileScreen = () => {
  const {handleLogout} = useAuthFunction();
  const [email, setEmail] = useState('');
  const getUserEmail = async () => {
    const email = await getData();
    console.log('email', email);
    setEmail(email);
  };
  useFocusEffect(
    useCallback(() => {
      getUserEmail();
    }, []),
  );

  return (
    <Screen
      preset="fixed"
      scrollViewStyle={commonStyles.scrollViewContainerWithoutHeader}
      style={ProfileScreenStyles.screenContainer}
      stickyHeaderIndices={[1]}
      themeName="white"
      bounces={false}>
      <ExitIconWrapper onPress={handleLogout}>
        <ExitIcon />
      </ExitIconWrapper>
      <PersonalInfoContainer>
        <PersonIconWrapper>
          <PersonIcon />
        </PersonIconWrapper>
        <UserEmail>{email}</UserEmail>
      </PersonalInfoContainer>
      <RestInfo />
    </Screen>
  );
};

export default ProfileScreen;
