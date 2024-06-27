import { ViewStyle } from "react-native";

export interface IDatePickerProps {
  value: Date;
  errorMessage?: string;
  onSelect: (value: Date) => void;
  pickerTextTestID?: string;
  iconColor?: string;
  PickerComponent?: React.ReactElement;
  containerStyle?: ViewStyle;
}
