import { ViewStyle } from "react-native";

export interface IDatePickerProps {
  value: Date;
  errorMessage?: string;
  onSelect: (value: Date) => void;
  pickerTextTestID?: string;
  iconColor?: string;
  minimumDate?: Date;
  maximumDate?: Date;
  PickerComponent?: React.ReactElement;
  rightIcon?: React.ReactNode;
  containerStyle?: ViewStyle;
}
