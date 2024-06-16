import { SvgProps } from 'react-native-svg';

export interface IIconProps extends SvgProps {
  focused?: boolean;
  opacity?: number;
  menuStrokeColor?: string;
}
