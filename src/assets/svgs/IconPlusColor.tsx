import {
  HEIGHT_SCALE_RATIO,
  ptColor,
  WIDTH_SCALE_RATIO,
} from 'constants/style';
import React, { memo } from 'react';
import { Path, Svg, Rect, Defs, Stop, LinearGradient } from 'react-native-svg';
interface Props {
  height?: number;
  width?: number;
  color?: string;
}

const IconPlusColor = (props: Props) => {
  const { height, width, color } = props;
  return (
    <Svg
      height={height || 30 * HEIGHT_SCALE_RATIO}
      width={width || 30 * WIDTH_SCALE_RATIO}
      viewBox="0 0 28 28"
      fill="none"
    >
      <Path
        d="M0.497391 9.58025H9.43838V0.644043H18.0844V9.58025H27.0254V18.2365H18.0844V27.1803H9.43838V18.2365H0.497391V9.58025Z"
        fill={color || ptColor.appColor}
      />
    </Svg>
  );
};

export default memo(IconPlusColor);
