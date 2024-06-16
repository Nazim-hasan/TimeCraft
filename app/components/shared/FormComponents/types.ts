import { IInputProps } from 'libs/shared/types/interfaces/common.interface';
import { RegisterOptions } from 'react-hook-form';
import { ViewStyle } from 'react-native';


export interface IFormFieldProps extends IInputProps {
  name: string;
  rules: RegisterOptions;
  validationLength?: number;
  formatter?: (oldValue: string, newValue: string) => string;
  onValid?: () => void;
  defaultValue?: any;
  focusNextOnValid?: boolean;
  focusNextOnSubmitEditing?: boolean;
  nextInputName?: string;
  containerStyle?: ViewStyle;
  isEditableIcon?: boolean;
  tooltipData?: (string | string[])[];
}
