import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

import { IIconProps } from '../types';

export const UserLineIcon = (props: IIconProps) => (
  <Svg width={18} height={19.923} {...props}>
    <G
      data-name="Icon feather-user"
      opacity={props.focused ? 1 : 0.5}
      fill="none"
      stroke={props.focused ? '#fff' : '#000'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
    >
      <Path
        data-name="Path 8011"
        d="M16.934 18.923v-1.991a3.983 3.983 0 0 0-3.983-3.983H4.984a3.983 3.983 0 0 0-3.983 3.983v1.991"
      />
      <Path
        data-name="Path 8012"
        d="M12.95 4.983A3.983 3.983 0 1 1 8.966 1a3.983 3.983 0 0 1 3.984 3.983Z"
      />
    </G>
  </Svg>
);
