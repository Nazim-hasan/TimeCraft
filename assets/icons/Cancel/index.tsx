import * as React from 'react';
import Svg, { SvgProps, Path, Ellipse } from 'react-native-svg';

export const CancelIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" width={20} height={20} {...props}>
    <Ellipse
      fill="#A4A4A4"
      opacity={0.3}
      cx={256}
      cy={256}
      rx={256}
      ry={255.832}
    />
    <Path
      transform="rotate(-45.001 256.015 255.982)"
      fill="#2C8DFF"
      d="M228.021 113.143h55.991v285.200h-55.100z"
    />
    <Path
      transform="rotate(-45.001 255.997 255.968)"
      fill="#2C8DFF"
      d="M113.164 227.968h285.669v55.991H113.164z"
    />
  </Svg>
);
