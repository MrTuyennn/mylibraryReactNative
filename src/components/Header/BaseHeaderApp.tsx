import {
  FS,
  HEIGHT_SCALE_RATIO,
  ptColor,
  WIDTH_SCALE_RATIO,
} from 'constants/style';
import React from 'react';
import {View, Text, ViewStyle} from 'react-native';
import {getStatusBarHeight} from 'utils/getStatusBarHeight';
import {style} from 'constants/style';
import {IcBack} from 'assets';
import BaseHeader, {BaseHeaderProps} from './BaseHeader';

export interface BaseHeaderAppProps extends BaseHeaderProps {
  navigation?: any;
  styleTitle?: ViewStyle;
  title?: string;
  titleCenter?: boolean;
  onlytitle?: boolean;
  leftIcon?: any;
}

const BaseHeaderApp = (props: BaseHeaderAppProps) => {
  if (props.onlytitle) {
    return (
      <BaseHeader
        children={
          <Text
            style={[
              style.textCaption,
              {
                textAlign: props.titleCenter ? 'center' : 'left',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: FS(17),
                textTransform: 'uppercase',
                color: ptColor.white,
              },
            ]}>
            {props.title}
          </Text>
        }
        {...props}
      />
    );
  }
  return (
    <BaseHeader
      navigation={props.navigation}
      leftIcon={
        <View style={{}}>
          <IcBack
            height={20 * HEIGHT_SCALE_RATIO}
            width={20 * WIDTH_SCALE_RATIO}
            color={ptColor.white}
          />
        </View>
      }
      children={
        <Text
          style={[
            style.textCaption,
            {
              textAlign: props.titleCenter ? 'center' : 'left',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: FS(17),
              textTransform: 'uppercase',
              color: ptColor.white,
            },
          ]}>
          {props.title}
        </Text>
      }></BaseHeader>
  );
};

BaseHeaderApp.defaultProps = {
  titleCenter: true,
};

export default BaseHeaderApp;
