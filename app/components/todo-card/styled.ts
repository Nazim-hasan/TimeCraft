import Text from 'components/shared/text/Text';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { colors } from 'theme/colors';
import { metrics } from 'theme/metrics';

export const TodoCardContainer = styled.Pressable`
  alignItems: center;
  backgroundColor: #fff;
  marginVertical: 10px;
  borderRadius: 10px;
`;

export const CardWrapper = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
`;

export const ImageContainer = styled.View`
  flex: 0.4;
  width: 100px;
  height: 100px;
`;

export const TaskImage = styled.Image`
  width: 100px;
  height: 110px;
  borderRadius: 8px;
  margin-vertical: ${metrics.spacing.s}px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  marginVertical: ${metrics.spacing.m}px;
  paddingLeft: ${metrics.spacing.s}px;
`;

export const Title = styled.Text`
  fontSize: ${metrics.spacing.m}px;
  fontWeight: bold;
  marginVertical: ${metrics.spacing.xs}px;

`;
export const Note = styled.Text`
  color: ${colors.lightGray};
  marginVertical: ${metrics.spacing.xs}px;
`;
export const Time = styled(Text)``;
export const FormateDate = styled(Text)``;

export const DateTimeContainer = styled.View`
  flexDirection: row;
`;

export const CardStyles = StyleSheet.create({
  title: {
    marginVertical: metrics.spacing.xs,
    color: colors.lightGray,
  }
})