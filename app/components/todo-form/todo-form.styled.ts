import { StyleSheet } from "react-native";
import { hp } from "services/helper/responsive-dimenssion";
import styled from "styled-components/native";

export const TodoFormContainer = styled.View`
  width: 100%;
  margin-top: ${hp(5)}px;
`;

export const todoFormStyles = StyleSheet.create({
  containerStyle: {
    width: '100%',
  },
  inputContainerStyle: {
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 0.5,
    padding: 5,
  },
});

export const DateText = styled.Text`
  font-size: 16px;
  color: #000;
  margin-bottom: 5px;
`;