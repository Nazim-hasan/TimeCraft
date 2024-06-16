import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

export const EyeIcon = ({ fill = '#9ca3af', ...props }: SvgProps) => (
  <Svg width={20} height={16} {...props}>
    <G data-name="Iconly/Bold/Show">
      <Path
        data-name="Path 13723"
        d="M10 0a9.265 9.265 0 0 1 5.737 2.046 14.171 14.171 0 0 1 4.2 5.663.728.728 0 0 1 0 .572C17.854 13.11 14.137 16 10 16h-.01C5.863 16 2.146 13.11.059 8.281a.728.728 0 0 1 0-.572C2.146 2.88 5.863 0 9.99 0Zm0 4.121A3.874 3.874 0 1 0 13.893 8 3.89 3.89 0 0 0 10 4.121Zm0 1.452A2.419 2.419 0 1 1 7.562 8a2.531 2.531 0 0 1 .049-.475h.049a2 2 0 0 0 2-1.92 1.946 1.946 0 0 1 .34-.031Z"
        fill={fill}
      />
    </G>
  </Svg>
);
