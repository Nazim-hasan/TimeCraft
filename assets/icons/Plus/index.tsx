import * as React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";
const PlusIcon = (props: SvgProps) => (
  <Svg
    width={19}
    height={19}
    x={0}
    y={0}
    viewBox="0 0 24 24"
    {...props}
  >
    <G>
      <Path
        d="M18 2c2.206 0 4 1.794 4 4v12c0 2.206-1.794 4-4 4H6c-2.206 0-4-1.794-4-4V6c0-2.206 1.794-4 4-4zm0-2H6a6 6 0 0 0-6 6v12a6 6 0 0 0 6 6h12a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6z"
        fill="#000000"
        opacity={1}
        data-original="#000000"
      />
      <Path
        d="M12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1z"
        fill="#000000"
        opacity={1}
        data-original="#000000"
      />
      <Path
        d="M6 12a1 1 0 0 1 1-1h10a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1z"
        fill="#000000"
        opacity={1}
        data-original="#000000"
      />
    </G>
  </Svg>
);
export default PlusIcon;
