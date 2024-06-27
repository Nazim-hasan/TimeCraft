import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {metrics} from 'theme/metrics';

export const ProfileScreenStyles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: metrics.spacing.m,
    marginVertical: metrics.spacing.m,
  },
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
`
export const UserEmail = styled.Text`
  text-align: center;
  font-size: 16px;
  margin-top: ${metrics.spacing.m}px;
  `


export const RestInfo = styled.View`
flex: 1;
`