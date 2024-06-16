export interface IInputContainerProps {
  readonly isFocused: boolean;
  readonly errorMessage?: string | boolean;
  readonly withBorder?: boolean;
  readonly borderColor?: string;
}

export interface IInputBtnStyle {
  color?: string;
  disabled?: boolean;
}

export interface IInputLabelStyle {
  color?: string;
  inputLabelFontSize?: number;
  isRegistrationField?: boolean;
}
