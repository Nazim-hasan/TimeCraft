import styled from 'styled-components/native';
import { TextInput, ViewStyle } from 'react-native';


import {
  IInputBtnStyle,
  IInputContainerProps,
  IInputLabelStyle,
} from './types';
import { colors } from 'theme/colors';

export const Container = styled.View`
  opacity: ${({ disabled }: { disabled: boolean }) => (disabled ? 0.85 : 1)};
`;

export const InputLabel = styled.Text<IInputLabelStyle>`
  color: ${({ theme, color }) => color || theme.color.slateGray};
  font-size: ${({ inputLabelFontSize }) => inputLabelFontSize || 11}px;
  
  margin-bottom: 8px;
  text-align: left;
`;

export const InputContainer = styled.View<IInputContainerProps>`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  margin-bottom: 5px;
  border: 1px solid;
  border-radius: 7px;
  border-color: ${({ isFocused, errorMessage, borderColor, theme }) =>
    borderColor ||
    (errorMessage
      ? colors.danger
      : isFocused
      ? colors.primary
      : colors.lightGray)};
  border-style: ${({ borderStyle }) => borderStyle || 'solid'};
`;

export const IconContainer = styled.View<ViewStyle>`
  width: ${({ width = 20 }) => width}px;
  align-items: center;
  justify-content: center;
  padding-right: ${({ paddingRight = 20 }) => paddingRight}px;
  flex-direction: row;
`;

export const LabelContainer = styled.View<ViewStyle>`
  flex-direction: row;
  align-items: center;
`;

export const TextInputStyled = styled(TextInput)`
  flex: 1;
  font-size: 12px;
  padding-left: 5px;
  margin-left: 5px;
  margin-right: 25px;
  color: ${({ color }) => color || colors.darkGray};
  text-align: left;
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => colors.danger};
  font-size: 12px;
  text-align: left;
`;

export const InputHint = styled.Text`
  color: ${({ theme }) => theme.color.darkTitle};
  font-size: 10px;
`;

export const SubmitButtonContainer = styled.View`
  height: 100%;
  width: 30%;
  padding: ${({ paddingHorizontal = 4, paddingVertical = 4 }) =>
    ` ${paddingVertical}px ${paddingHorizontal}px`};
  margin-left: 5px;
`;

export const SubmitButton = styled.TouchableOpacity<IInputBtnStyle>`
  height: 100%;
  background-color: ${({ theme, color, disabled }) =>
    disabled ? theme.color.gray : color || colors.primary};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const SubmitButtonLabel = styled.Text`
  font-size: 12px;
  color: 'white';
`;

export const SecureButton = styled.TouchableOpacity`
  margin-right: 13px;
  align-items: center;
  justify-content: center;
`;

export const EditIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-right: 13px;
`;

export const EditText = styled.Text`
  color: ${({ theme }) => theme.color.silverGray};
  font-size: 6px;
  margin-right: 5px;
`;
