import { ViewStyle } from "react-native";

export interface IFormDatePickerProps {
  fieldName: string;
  placeholderText?: string;
  iconColor?: string;
  rightIcon?: React.ReactNode;
  containerStyle?: ViewStyle;
  required?: boolean;
}