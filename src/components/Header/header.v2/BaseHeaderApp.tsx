import {
  FS,
  HEIGHT_SCALE_RATIO,
  ptColor, 
  style,
  WIDTH_SCALE_RATIO,
} from 'constants/style';
import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { IcBack } from 'assets/svgs';
import BaseHeader, { BaseHeaderProps } from './BaseHeader';

export interface BaseHeaderAppProps extends BaseHeaderProps {
  navigation?: any;
  styleTitle?: any;
  title?: string;
  titleCenter?: boolean;
  onlytitle?: boolean;
  colorIcon?: boolean;
  // leftIcon?: any;
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
                fontSize: FS(16),
                textTransform: 'uppercase',
              },
            ]}
          >
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
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <IcBack
            height={20 * HEIGHT_SCALE_RATIO}
            width={20 * WIDTH_SCALE_RATIO}
            color={props.colorIcon ? 'transparent' : ptColor.white}
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
              fontSize: FS(19),
              color: ptColor.white,
            },
            props.styleTitle,
          ]}
        >
          {props.title}
        </Text>
      }
      {...props}
    ></BaseHeader>
  );
};

BaseHeaderApp.defaultProps = {
  titleCenter: true,
  colorIcon: false,
};

export default memo(BaseHeaderApp);
