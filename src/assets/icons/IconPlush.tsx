import React from 'react';
import {View, Text} from 'react-native';

import {G, Path, Svg} from 'react-native-svg';
interface Props {
  height?: number;
  width?: number;
  color?: string;
}

const IconPlush = (props: Props) => {
  return (
    <Svg
      fill={props.color}
      height={props.height || 100}
      width={props.width || 100}
      viewBox="0 0 512 512">
      <G>
        <Path d="m416 241h-145v-145c0-8.284-6.716-15-15-15s-15 6.716-15 15v145h-145c-8.284 0-15 6.716-15 15s6.716 15 15 15h145v145c0 8.284 6.716 15 15 15s15-6.716 15-15v-145h145c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
        <Path d="m437 0h-362c-41.355 0-75 33.645-75 75v362c0 41.355 33.645 75 75 75h362c41.355 0 75-33.645 75-75v-362c0-41.355-33.645-75-75-75zm45 437c0 24.813-20.187 45-45 45h-362c-24.813 0-45-20.187-45-45v-362c0-24.813 20.187-45 45-45h362c24.813 0 45 20.187 45 45z" />
      </G>
    </Svg>
  );
};

export default IconPlush;
