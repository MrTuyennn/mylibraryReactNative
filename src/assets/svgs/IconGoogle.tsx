import {HEIGHT_SCALE_RATIO, ptColor, WIDTH_SCALE_RATIO} from 'constants/style';
import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {G, Path, Svg} from 'react-native-svg';
interface Props {
  height?: number;
  width?: number;
  color?: string;
}

const IconGoogle = (props: Props) => {
  const {height, width, color} = props;
  return (
    <Svg
      width={width || 30 * WIDTH_SCALE_RATIO}
      height={height || 30 * HEIGHT_SCALE_RATIO}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet">
      <G
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={color || ptColor.white}
        stroke="none">
        <Path d="M1445 4154 c-712 -77 -1276 -593 -1417 -1296 -32 -162 -32 -434 0 -595 131 -655 620 -1144 1275 -1275 92 -18 145 -22 302 -22 199 0 272 8 435 50 268 69 472 185 660 373 257 258 397 584 431 1003 10 120 1 308 -17 376 l-6 22 -754 0 -754 0 0 -275 0 -275 455 0 455 0 -6 -27 c-68 -287 -284 -520 -564 -611 -484 -158 -994 51 -1220 498 -276 547 -6 1222 566 1418 168 58 389 67 559 23 103 -27 248 -98 327 -161 34 -28 65 -49 69 -48 13 5 424 402 424 410 0 11 -112 103 -188 154 -167 112 -365 195 -565 235 -95 19 -375 33 -467 23z" />
        <Path d="M4190 2970 l0 -230 -232 -2 -233 -3 -3 -232 -2 -233 235 0 235 0 0 -235 0 -235 233 2 232 3 3 233 2 232 230 0 230 0 0 235 0 235 -230 0 -230 0 0 230 0 230 -235 0 -235 0 0 -230z" />
      </G>
    </Svg>
  );
};

export default memo(IconGoogle);

const styles = StyleSheet.create({});
