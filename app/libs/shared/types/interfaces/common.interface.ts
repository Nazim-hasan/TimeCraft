import {TextInputProps, TextStyle, ViewStyle} from 'react-native';
import {SetterOrUpdater} from 'recoil';

export interface IInputProps extends TextInputProps {
  renderInputIcon?: (isFocused?: boolean) => JSX.Element;
  buttonLabel?: string;
  buttonColor?: string;
  errorMessage?: string;
  groupName?: string;
  onBtnPress?: () => void;
  inputLabel?: string;
  inputLabelColor?: string;
  required?: boolean;
  disabled?: boolean;
  handleOnChange?: (
    value: string,
    setter: SetterOrUpdater<string>,
    errorSetter: SetterOrUpdater<string>,
  ) => void;
  isLoading?: boolean;
  disabledButton?: boolean;
  borderColor?: string;
  inputHint?: string;
  inputContainerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  isFieldEdited?: boolean;
  showSecureIcon?: boolean;
  onApplyPress?: () => void;
  onCancelPress?: () => void;
  buttonLabelColor?: string;
  borderStyle?: string;
  buttonContainerPaddingVertical?: number;
  buttonContainerPaddingHorizontal?: number;
  isEditableIcon?: boolean;
  tooltipData?: (string | string[])[];
  labelFontSize?: number;
  bottomSheetInput?: boolean;
  withoutEditText?: boolean;
}

export interface ILoadableValue<T> {
  isLoading: boolean;
  isError: boolean;
  data: T;
}