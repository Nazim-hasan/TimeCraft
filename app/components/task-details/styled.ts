import styled from 'styled-components/native';
import {colors} from 'theme/colors';
import { metrics } from 'theme/metrics';

export const DetailsContainer = styled.View`
  margin-top: ${metrics.spacing.m}px;
`;
export const BannerImage = styled.Image`
  height: 200px;
  width: 100%;
  border-radius: 8px;
`;
export const DueDate = styled.Text`
  font-size: 12px;
  margin-top: -15px;
  margin-vertical: 5px;
`;

export const TaskDescription = styled.Text`
  color: ${colors.lightGray};
  font-size: 11px;
  margin-top: 10px;
  margin-vertical: 5px;
`;

export const BottomButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`