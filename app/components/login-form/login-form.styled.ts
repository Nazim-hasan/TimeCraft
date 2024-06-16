import { StyleSheet } from 'react-native';
import {hp} from 'services/helper/responsive-dimenssion';
import styled from 'styled-components/native';

export const LoginFormContainer = styled.View`
  width: 100%;
  margin-top: ${hp(5)}px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;



export const loginFormStyles = StyleSheet.create({
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