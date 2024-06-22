import { ViewStyle } from "react-native";
import { Asset } from "react-native-image-picker";

export interface IImagePickerProps {
  value: Promise<Asset | void> ;
  onSelect: (value: Promise<Asset | void>) => void;
  containerStyle?: ViewStyle;
  PickerComponent?: React.ReactElement;
}
