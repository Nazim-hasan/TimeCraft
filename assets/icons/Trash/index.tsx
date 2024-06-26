import * as React from 'react';
import Svg, {Defs, ClipPath, Path, G, SvgProps} from 'react-native-svg';

function TrashIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 682.667 682.667" {...props}>
      <Defs>
        <ClipPath id="a">
          <Path d="M0 512h512V0H0z" data-original="#000000" />
        </ClipPath>
      </Defs>
      <G
        clipPath="url(#a)"
        transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
        fill="none"
        stroke={props.color || '#000'}
        strokeWidth={15}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}>
        <Path
          d="M192.071 446.568v33.861c0 13.294 10.777 24.071 24.071 24.071h79.715c13.294 0 24.071-10.777 24.071-24.071v-33.861M326.459 93.404l18.656 221.13M166.885 314.535l18.656-221.13M256 314.535V93.405M111.958 392.38H66.632c-14.963 0-27.094 12.13-27.094 27.094s12.131 27.094 27.094 27.094h378.735c14.964 0 27.095-12.13 27.095-27.094s-12.131-27.094-27.095-27.094H147.041M408.611 134.045l21.796 258.335"
          data-original="#000000"
          strokeWidth={15}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeDasharray="none"
          strokeOpacity={1}
        />
        <Path
          d="M81.593 392.38l28.638-339.434C112.399 27.252 133.887 7.5 159.673 7.5h192.654c25.787 0 47.275 19.752 49.443 45.446l3.889 46.108"
          data-original="#000000"
          strokeWidth={15}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeDasharray="none"
          strokeOpacity={1}
        />
      </G>
    </Svg>
  );
}

export default TrashIcon;
