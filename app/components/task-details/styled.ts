import styled from 'styled-components/native';
import {colors} from 'theme/colors';

export const DetailsContainer = styled.View``;
export const BannerImage = styled.Image`
  height: 200px;
  width: 100%;
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
`