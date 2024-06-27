import Text from 'components/shared/text/Text';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import { colors } from 'theme/colors';
import {metrics} from 'theme/metrics';

export const ProfileScreenStyles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: metrics.spacing.m,
    marginVertical: metrics.spacing.m,
  },
  remainingTasks: {
    marginTop: metrics.spacing.s,
  },
  userNameStyle: {
    marginTop: 10,
  }
});

export const ExitIconWrapper = styled.Pressable`
  align-self: flex-end;
`

export const PersonalInfoContainer = styled.View`
  flex: 1;
`
export const PersonIconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 8px;
  margin-top: ${metrics.spacing.m}px;
  padding: ${metrics.spacing.m}px;
`
export const UserEmail = styled.Text`
  text-align: center;
  font-size: 16px;
  margin-top: ${metrics.spacing.m}px;
  `
export const UserName = styled(Text)``;


export const RestInfo = styled.View`
flex: 1;
`;

export const TaskInfoContainer = styled.View`
  background-color: ${colors.white};
  border-radius: 10px;
  width: 100%;
  padding: 16px;
  margin-top: 10px;
`;
export const TaskInfoWrapper = styled.View`
  margin-vertical: 8px;
`;