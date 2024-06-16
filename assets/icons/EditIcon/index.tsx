import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const EditIcon = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" {...props}>
    <Path
      d="M9.05115 2.89771H2.78915C2.31463 2.89771 1.85956 3.0862 1.52403 3.42173C1.1885 3.75726 1 4.21234 1 4.68685V17.2109C1 17.6854 1.1885 18.1405 1.52403 18.476C1.85956 18.8115 2.31463 19 2.78915 19H15.3132C15.7877 19 16.2427 18.8115 16.5783 18.476C16.9138 18.1405 17.1023 17.6854 17.1023 17.2109V10.9489"
      stroke="#CBCBCB"
      strokeWidth={2}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
    />
    <Path
      d="M15.7602 1.55582C16.1161 1.19993 16.5988 1 17.1021 1C17.6054 1 18.088 1.19993 18.4439 1.55582C18.7998 1.9117 18.9997 2.39438 18.9997 2.89768C18.9997 3.40097 18.7998 3.88365 18.4439 4.23953L9.94548 12.738L6.36719 13.6325L7.26176 10.0543L15.7602 1.55582Z"
      stroke="#CBCBCB"
      strokeWidth={2}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
    />
  </Svg>
);