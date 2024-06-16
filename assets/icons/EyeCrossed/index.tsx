import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { colors } from 'theme/colors';

export const EyeCrossed = (props: SvgProps) => (
  <Svg width={22} height={19} {...props}>
    <Path
      data-name="Path 8"
      d="M11 4a5 5 0 0 1 5 5 4.853 4.853 0 0 1-.36 1.83l2.92 2.92A11.817 11.817 0 0 0 21.99 9a11.827 11.827 0 0 0-11-7.5 11.645 11.645 0 0 0-3.98.7l2.16 2.16A4.853 4.853 0 0 1 11 4ZM1 1.27l2.28 2.28.46.46A11.8 11.8 0 0 0 0 9a11.822 11.822 0 0 0 15.38 6.66l.42.42L18.73 19 20 17.73 2.27 0ZM6.53 6.8l1.55 1.55A2.821 2.821 0 0 0 8 9a3 3 0 0 0 3 3 2.821 2.821 0 0 0 .65-.08l1.55 1.55A4.967 4.967 0 0 1 6.53 6.8Zm4.31-.78 3.15 3.15.02-.16a3 3 0 0 0-3-3Z"
      fill={colors.primary}
    />
  </Svg>
);
