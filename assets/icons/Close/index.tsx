import * as React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";
export const CloseIcon = (props: SvgProps) => (
  <Svg
    width={18}
    height={18}
    x={0}
    y={0}
    viewBox="0 0 64 64"
    {...props}
  >
    <G>
      <Path
        fill="#ff5454"
        d="M50 8H14a6.005 6.005 0 0 0-6 6v36a6.005 6.005 0 0 0 6 6h36a6.005 6.005 0 0 0 6-6V14a6.005 6.005 0 0 0-6-6zm-6.59 32.59a1.994 1.994 0 1 1-2.82 2.82L32 34.83l-8.59 8.58a1.994 1.994 0 0 1-2.82-2.82L29.17 32l-8.58-8.59a1.994 1.994 0 0 1 2.82-2.82L32 29.17l8.59-8.58a1.994 1.994 0 0 1 2.82 2.82L34.83 32z"
        opacity={1}
        data-original="#ff5454"
      />
      <Path
        fill="#ffffff"
        d="M43.41 40.59a1.994 1.994 0 1 1-2.82 2.82L32 34.83l-8.59 8.58a1.994 1.994 0 0 1-2.82-2.82L29.17 32l-8.58-8.59a1.994 1.994 0 0 1 2.82-2.82L32 29.17l8.59-8.58a1.994 1.994 0 0 1 2.82 2.82L34.83 32z"
        opacity={1}
        data-original="#ffffff"
      />
    </G>
  </Svg>
);
