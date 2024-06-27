import {View, Pressable} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Screen} from 'layout/shared/screen/Screen';
import {commonStyles} from 'libs/shared/ui/styleSheet';
import {
  ExitIconWrapper,
  PersonIconWrapper,
  PersonalInfoContainer,
  ProfileScreenStyles,
  RestInfo,
  TaskInfoContainer,
  TaskInfoWrapper,
  UserEmail,
  UserName,
} from './styled';
import {useAuthFunction} from 'services/auth/hooks';
import {PersonIcon} from 'assets/icons/Person';
import {ExitIcon} from 'assets/icons/Exit';
import {getData} from 'storage/asyncStore';
import {useFocusEffect} from '@react-navigation/native';
import Text from 'components/shared/text/Text';
import {useLoadableValue} from 'services/hooks/useLoadableValue';
import {todoSelector} from 'libs/shared/data-access/task/task.selector';
import {taskStatuses} from 'libs/shared/types/enums/todo.enums';
import {getNameFromEmail} from 'services/helper/utils';

const ProfileScreen = () => {
  const todoList = useLoadableValue(todoSelector(taskStatuses.todo));
  const {handleLogout} = useAuthFunction();
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

  const remainingTaskMsg =
    todoList.data.length === 0
      ? 'You have no task to complete'
      : `You got ${todoList.data.length} task to complete`;

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
          <UserName
            customStyles={ProfileScreenStyles.userNameStyle}
            preset="RegularXl">
            {getNameFromEmail(email)}
          </UserName>
          <UserEmail>Email: {email}</UserEmail>
        </PersonIconWrapper>
        <TaskInfoContainer>
          <TaskInfoWrapper>
            <Text customStyles={ProfileScreenStyles.remainingTasks}>
              {remainingTaskMsg}
            </Text>
          </TaskInfoWrapper>
        </TaskInfoContainer>
      </PersonalInfoContainer>
      <RestInfo />
    </Screen>
  );
};

export default ProfileScreen;
