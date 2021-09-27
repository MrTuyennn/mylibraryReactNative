import React from 'react';
import {View, Text} from 'react-native';

import {G, Path, Svg} from 'react-native-svg';
interface Props {
  height?: number;
  width?: number;
  color?: string;
}

const IconSaveBlack = (props: Props) => {
  return (
    <Svg
      height={props.height || 20}
      width={props.width || 20}
      fill="#262626"
      viewBox="0 0 48 48">
      <Path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 28.9 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1z"></Path>
    </Svg>
  );
};

export default IconSaveBlack;
