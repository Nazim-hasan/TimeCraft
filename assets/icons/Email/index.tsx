import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from '../types';
import { colors } from 'theme/colors';

export const EmailIcon = (props: IIconProps) => (
  <Svg width={16} height={12} {...props}>
    <Path
      data-name="Path 4"
      d="M14.4 0H1.6A1.55 1.55 0 0 0 .008 1.5L0 10.5A1.557 1.557 0 0 0 1.6 12h12.8a1.557 1.557 0 0 0 1.6-1.5v-9A1.557 1.557 0 0 0 14.4 0Zm0 3L8 6.75 1.6 3V1.5L8 5.25l6.4-3.75Z"
      fill={props?.focused ? colors.primary : '#9ca3af'}
    />
  </Svg>
);
