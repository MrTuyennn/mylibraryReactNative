import {ptColor} from 'constants/style';
import React from 'react';
import {View, Text} from 'react-native';
import {G, Path, Svg, Polygon} from 'react-native-svg';
interface Props {
  height?: number;
  width?: number;
  color?: string;
}
const IconPost = (props: Props) => {
  return (
    <Svg
      height={props.height || 20}
      width={props.width || 20}
      fill={ptColor.black}
      viewBox="0 0 512 512">
      <G>
        <G>
          <G>
            <Path d="M400,0H112C50.144,0,0,50.144,0,112v288c0,61.856,50.144,112,112,112h288c61.856,0,112-50.144,112-112V112     C512,50.144,461.856,0,400,0z M480,400c0,44.183-35.817,80-80,80H112c-44.183,0-80-35.817-80-80V112c0-44.183,35.817-80,80-80     h288c44.183,0,80,35.817,80,80V400z" />
            <Polygon points="272,96 240,96 240,240 96,240 96,272 240,272 240,416 272,416 272,272 416,272 416,240 272,240    " />
          </G>
        </G>
      </G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
      <G></G>
    </Svg>
  );
};

export default IconPost;
