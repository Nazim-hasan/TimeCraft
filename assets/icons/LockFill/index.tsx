import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIconProps } from '../types';
import { colors } from 'theme/colors';

export const LockFillIcon = (props: IIconProps) => (
  <Svg width={12} height={17} {...props}>
    <Path
      data-name="Path 6"
      d="M10.5 5.667h-.75V4.048A3.909 3.909 0 0 0 6 0a3.909 3.909 0 0 0-3.75 4.048v1.619H1.5A1.568 1.568 0 0 0 0 7.286v8.1A1.568 1.568 0 0 0 1.5 17h9a1.568 1.568 0 0 0 1.5-1.619v-8.1a1.568 1.568 0 0 0-1.5-1.614ZM6 12.952a1.624 1.624 0 0 1 0-3.238 1.624 1.624 0 0 1 0 3.238Zm2.325-7.286h-4.65V4.048A2.425 2.425 0 0 1 6 1.538a2.425 2.425 0 0 1 2.325 2.51Z"
      fill={props?.focused ? colors.primary : '#9ca3af'}
    />
  </Svg>
);
