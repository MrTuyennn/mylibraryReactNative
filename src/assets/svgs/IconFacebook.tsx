import {HEIGHT_SCALE_RATIO, ptColor, WIDTH_SCALE_RATIO} from 'constants/style';
import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {G, Path, Svg} from 'react-native-svg';
interface Props {
  height?: number;
  width?: number;
  color?: string;
}

const IconFacebook = (props: Props) => {
  const {height, width, color} = props;
  return (
    <Svg
      width={width || 20 * WIDTH_SCALE_RATIO}
      height={height || 20 * HEIGHT_SCALE_RATIO}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet">
      <G
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={color || ptColor.white}
        stroke="none">
        <Path d="M2980 5104 c-494 -80 -804 -397 -897 -919 -12 -70 -17 -188 -20 -537 l-5 -448 -369 0 -369 0 0 -455 0 -455 370 0 370 0 0 -1145 0 -1145 460 0 460 0 0 1145 0 1145 355 0 c195 0 355 3 355 6 0 3 25 203 55 444 30 241 55 443 55 449 0 8 -124 11 -411 11 l-410 0 3 403 c3 356 5 407 21 447 39 100 98 155 204 193 52 19 87 21 366 25 l307 4 0 404 c0 315 -3 406 -12 409 -34 11 -299 26 -533 30 -203 4 -281 1 -355 -11z" />
      </G>
    </Svg>
  );
};

export default memo(IconFacebook);

const styles = StyleSheet.create({});
