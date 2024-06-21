import styled from "styled-components/native";
import { colors } from "theme/colors";

export const PickerContainer = styled.Pressable`
  border-width: 0.8px;
  border-radius: 5px;
  border-color: ${colors.lightGray};
  padding: 15px;
`;
export const DateRangeText = styled.Text``
export const PlaceholderText = styled.Text`
  font-size: 10px;
  color: ${colors.lightGray};
  margin-bottom: 5px;
  margin-top: -5px;
`;