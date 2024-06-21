import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {colors} from 'theme/colors';
import {metrics} from 'theme/metrics';

export const Message = styled.Text`
  color: ${colors.lightGray};
  position: absolute;
  top: 70%;
`;

export const TrashScreenStyles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: metrics.spacing.m,
    marginVertical: metrics.spacing.m,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
