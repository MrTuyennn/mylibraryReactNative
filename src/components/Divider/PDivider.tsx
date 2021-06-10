import {ptColor} from 'constants/style';
import React from 'react';
import {View, Text} from 'react-native';
import {Divider} from 'react-native-elements';
interface Props {
  color?: string;
}

const PDivider = (props: Props) => {
  return (
    <Divider
      style={{
        backgroundColor: props.color || ptColor.textPlaceholderColor,
        height: 0.5,
        width: '100%',
      }}
    />
  );
};

export default PDivider;
