import styled from 'styled-components/native';
import {colors} from 'theme/colors';

export const Container = styled.View``;
export const InputContainer = styled.Pressable`
  border-width: 0.8px;
  border-radius: 5px;
  padding: 16px;
  border-color: ${colors.lightGray};
`;
export const ChoosePhoto = styled.Text`
  font-size: 12px;
  color: ${colors.blueGray};
`;
export const ChoosenPhotoWrapper = styled.View``;
export const Label = styled.Text`
  font-size: 12px;
  color: ${colors.lightGray};
  margin-bottom: 5px;
`;
export const ChoosenPhoto = styled.Image`
  width: 100%;
  height: 100px;
  border-radius: 5px;
  margin-top: 10px;
`;
export const RemoveIconWrapper = styled.Pressable`
  position: absolute;
  right: -5px;
  top: 5px;
  padding: 1px;
  z-index: 1;
`;