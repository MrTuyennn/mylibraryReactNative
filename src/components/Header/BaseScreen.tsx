import React from 'react';
import {View, Text, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ptColor} from 'constants/style';
import BaseHeaderApp, {BaseHeaderAppProps} from './BaseHeaderApp';
interface Props {
  showBar?: boolean;
  appBar?: BaseHeaderAppProps;
  style?: ViewStyle;
  children?: React.ReactNode;
  navigation?: any;
}

const BaseScreen = (props: Props) => {
  return (
    <LinearGradient
      colors={ptColor.lineGradientBlue}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[{flex: 1} as ViewStyle, props.style]}>
      {props.showBar && (
        <BaseHeaderApp {...props.appBar} navigation={props.navigation} />
      )}
      {props.children}
    </LinearGradient>
  );
};

BaseScreen.defaultProps = {
  showBar: true,
};

export default BaseScreen;
