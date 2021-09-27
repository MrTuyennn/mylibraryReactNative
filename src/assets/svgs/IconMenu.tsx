import {ptColor} from 'constants/style';
import React from 'react';
import {View, Text} from 'react-native';
import {G, Path, Svg} from 'react-native-svg';
interface Props {
  height?: number;
  width?: number;
  color?: string;
}

const IconMenu = (props: Props) => {
  return (
    <Svg
      height={props.height || 20}
      width={props.width || 20}
      viewBox="0 0 515.555 515.555">
      <Path
        fill={props.color || ptColor.black}
        d="m303.347 18.875c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"
      />
      <Path
        fill={props.color || ptColor.black}
        d="m303.347 212.209c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"
      />
      <Path
        fill={props.color || ptColor.black}
        d="m303.347 405.541c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"
      />
    </Svg>
  );
};

export default IconMenu;
