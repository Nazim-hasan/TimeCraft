import styled from "styled-components/native";
import { colors } from "theme/colors";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  color: ${colors.lightGray};
  position: absolute;
  top: 70%;
`;