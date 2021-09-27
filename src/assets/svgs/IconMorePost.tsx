import { ptColor } from 'constants/style';
import React from 'react';
import { Path, Svg } from 'react-native-svg';

interface Props {
  height?: number;
  width?: number;
  color?: string;
}

const IconMorePost = (props: Props) => {
  return (
    <Svg
      fill={props.color || ptColor.black}
      height={props.height || 20}
      width={props.width || 20}
      viewBox="0 0 48 48">
      <Path
        clip-rule="evenodd"
        d="M45 1.5H3c-.8 0-1.5.7-1.5 1.5v42c0 .8.7 1.5 1.5 1.5h42c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-40.5 3h11v11h-11v-11zm0 14h11v11h-11v-11zm11 25h-11v-11h11v11zm14 0h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11zm14 28h-11v-11h11v11zm0-14h-11v-11h11v11zm0-14h-11v-11h11v11z"
        fill-rule="evenodd"></Path>
    </Svg>
  );
};

export default IconMorePost;