import { ptColor } from 'constants/style';
import React from 'react'
import { View, Text } from 'react-native'
import { Path, Svg } from 'react-native-svg';
interface Props {
  height?: number;
  width?: number;
  color?: string;
}
const IconMenuOp = (props: Props) => {
    return (
        <Svg fill={props.color || ptColor.black} height={props.height || 20} width={props.width || 20}  viewBox="0 -53 384 384" >
            <Path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
            <Path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
            <Path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
            </Svg>
    )
}

export default IconMenuOp
