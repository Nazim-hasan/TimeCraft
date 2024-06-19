import { ViewStyle, TextStyle, RegisteredStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

export interface ISwitchTabSelectorOption {
  label: string;
  value: string | number;
  customIcon?: (props: SvgProps) => JSX.Element | JSX.Element | Element;
  imageIcon?: string;
  activeColor?: string;
  accessibilityLabel?: string;
  testID?: string;
  disabled?: boolean;
  screenGuideText?: string;
  screenGuideZoneNum?: number;
  count?: number | string;
  layoutData?: ILayoutData;
}
export interface ILayoutData {
  height?: number;
  width?: number;
  x?: number;
  y?: number;
}

export interface ISwitchTabSelectorProps extends ViewStyle, TextStyle {
  options: ISwitchTabSelectorOption[];
  initial?: number;
  onPress?(value: string | number | ISwitchTabSelectorOption): void;
  selectedColor?: string;
  backgroundColor?: string;
  buttonMargin?: number;
  hasPadding?: boolean;
  animationDuration?: number;
  valuePadding?: number;
  containerStyle?: ViewStyle | RegisteredStyle<ViewStyle>;
  returnObject?: boolean;
  disabled?: boolean;
  disableValueChangeOnPress?: boolean;
  switchTabSelectorType: string;
  initialSwitchTabValue?: string;
  withTourGuide?: boolean;
  isBold?: boolean;
  isHomeTab?: boolean;
  isScrollable?: boolean;
}

export interface ISwitchTabSelectorStyledProps extends ViewStyle, TextStyle {
  buttonMargin?: number;
  hasPadding?: boolean;
  valuePadding?: number;
  activeColor?: string;
  optionsLength?: number;
  sliderWidth?: number;
  isSelected?: boolean;
  selectedColor?: string;
  isBold?: boolean;
}
