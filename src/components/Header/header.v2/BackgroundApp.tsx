import { IconMedpro, IconPlus, IconPlusColor } from 'assets/svgs';
import ItemPosition from 'components/ItemPosition';
import {
  HEIGHT_SCALE_RATIO, ptColor,
  WIDTH_SCALE_RATIO
} from 'constants/style';
import React, { memo } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import BaseHeaderApp, { BaseHeaderAppProps } from './BaseHeaderApp';

interface Props {
  showBar?: boolean;
  appBar?: BaseHeaderAppProps;
  style?: ViewStyle;
  children?: React.ReactNode;
  navigation?: any;
  colorMedpro?: boolean;
}

const BackgroundApp = (props: Props) => {
  return (
    <SafeAreaProvider>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={ptColor.lineGradientHeader}
        style={[{ flex: 1 } as ViewStyle, props.style]}
      >
        <ItemPosition
          top={10 * HEIGHT_SCALE_RATIO}
          left={50 * HEIGHT_SCALE_RATIO}
        >
          <IconPlus />
        </ItemPosition>
        <ItemPosition
          top={80 * WIDTH_SCALE_RATIO}
          left={60 * HEIGHT_SCALE_RATIO}
        >
          <IconPlusColor
            width={20 * WIDTH_SCALE_RATIO}
            height={20 * HEIGHT_SCALE_RATIO}
          />
        </ItemPosition>
        <ItemPosition
          top={60 * WIDTH_SCALE_RATIO}
          left={80 * HEIGHT_SCALE_RATIO}
        >
          <IconPlus
            width={20 * WIDTH_SCALE_RATIO}
            height={20 * HEIGHT_SCALE_RATIO}
          />
        </ItemPosition>
        <ItemPosition
          top={60 * WIDTH_SCALE_RATIO}
          left={110 * HEIGHT_SCALE_RATIO}
        >
          <IconPlusColor
            width={20 * WIDTH_SCALE_RATIO}
            height={20 * HEIGHT_SCALE_RATIO}
          />
        </ItemPosition>
        <ItemPosition
          top={45 * WIDTH_SCALE_RATIO}
          left={130 * HEIGHT_SCALE_RATIO}
        >
          <IconPlusColor
            width={20 * WIDTH_SCALE_RATIO}
            height={20 * HEIGHT_SCALE_RATIO}
          />
        </ItemPosition>
        <ItemPosition
          top={50 * WIDTH_SCALE_RATIO}
          left={150 * HEIGHT_SCALE_RATIO}
        >
          <IconPlus />
        </ItemPosition>

        <ItemPosition top={60 * WIDTH_SCALE_RATIO} left={0}>
          <IconPlusColor height={50} width={50} />
        </ItemPosition>
        <ItemPosition
          top={35 * WIDTH_SCALE_RATIO}
          left={20 * HEIGHT_SCALE_RATIO}
        >
          <IconPlus height={40} width={40} />
        </ItemPosition>
        <ItemPosition
          top={20 * HEIGHT_SCALE_RATIO}
          right={20 * WIDTH_SCALE_RATIO}
        >
          <IconMedpro
            color={props.colorMedpro ? ptColor.white : ptColor.blue}
          />
        </ItemPosition>
        <SafeAreaView
          style={styles.background}
          // @ts-ignore
          forceInset={{ top: 'always', bottom: 0 }}
        >
          {props.showBar && (
            <BaseHeaderApp {...props.appBar} navigation={props.navigation} />
          )}
          {props.children}
        </SafeAreaView>
      </LinearGradient>
    </SafeAreaProvider>
  );
};

BackgroundApp.defaultProps = {
  showBar: true,
  colorMedpro: false,
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // backgroundColor: ptColor.appColor,
  },
});
export default memo(BackgroundApp);
