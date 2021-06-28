// import {IMAGEPATH} from 'constants/imagePath';
import {
  HEIGHT_SCALE_RATIO,
  ptColor,
  style,
  WIDTH,
  WIDTH_SCALE_RATIO
} from 'constants/style';
import React, { memo } from 'react';
import {
  FlatList,
  FlatListProps,
  RefreshControl,
  Text,
  View
} from 'react-native';
import { SkypeIndicator, UIActivityIndicator } from 'react-native-indicators';
import PScrollView from './PScrollView';
// @ts-ignore
export interface PScrollViewProps extends FlatListProps {
  isLoading?: Boolean;
  renderFooter?: React.ReactNode;
  renderHeader?: React.ReactNode;
  textNull?: String;
  refreshing?: Boolean;
  onRefresh?: () => void;
  data?: any;
  // renderItem?: any;
}

const PFlatList = (props: PScrollViewProps) => {
  const {
    isLoading,
    renderFooter,
    renderHeader,
    textNull,
    refreshing,
    data,
    onRefresh,
    renderItem,
  } = props;

  if (data.length === 0) {
    return (
      <PScrollView
        contentContainerStyle={{flex: 1}}
        indicatorStyle='white'
        refreshControl={
          <RefreshControl
            // @ts-ignore
            // enabled={true}
            // progressBackgroundColor={ptColor.white}
            // colors={ptColor.white}
            // size={0}
            refreshing={refreshing || false}
            onRefresh={onRefresh}
          />
        }>
        <View
          style={[{flex: 1}, {justifyContent: 'center', alignItems: 'center'}]}>
          {isLoading ? (
            <View>
              <UIActivityIndicator
                color={ptColor.black}
                size={20 * WIDTH_SCALE_RATIO}
                count={8}
              />
              <Text
                style={[
                  style.textCaption,
                  {
                    width: WIDTH * 0.5,
                    textAlign: 'center',
                    alignSelf: 'center',
                    paddingTop: 24 * HEIGHT_SCALE_RATIO,
                    paddingBottom: 24 * HEIGHT_SCALE_RATIO,
                  },
                ]}>
                {textNull}
              </Text>
            </View>
          ) : (
            <View>
              {/* <Image
                source={IMAGEPATH.nul_data}
                style={{flex: 0, height: WIDTH * 0.4}}
                resizeMode="contain"
              /> */}
              <Text
                style={[
                  style.textCaption,
                  {
                    width: WIDTH * 0.5,
                    textAlign: 'center',
                    alignSelf: 'center',
                    paddingTop: 24 * HEIGHT_SCALE_RATIO,
                    paddingBottom: 24 * HEIGHT_SCALE_RATIO,
                  },
                ]}>
                {textNull}
              </Text>
            </View>
          )}
        </View>
      </PScrollView>
    );
  }
  return (
    <FlatList
      {...props}
      keyExtractor={(item, index) =>
        item && item.id ? `${item?.id?.toString()}` : index?.toString()
      }
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={data}
      // onEndReachedThreshold={0.05}
      // renderItem={renderItem}
      // @ts-ignore
      ListHeaderComponent={() => {
        if (isLoading) {
          return (
            <SkypeIndicator
              color={ptColor.appColor2}
              size={30 * WIDTH_SCALE_RATIO}
              style={{
                paddingTop: 8 * HEIGHT_SCALE_RATIO,
                paddingBottom: 16 * HEIGHT_SCALE_RATIO,
              }}
            />
          );
        }
        return renderFooter ? renderFooter : <View />;
      }}
      ListFooterComponent={() => {
        if (isLoading) {
          return (
            <SkypeIndicator
              color={ptColor.appColor2}
              size={30 * WIDTH_SCALE_RATIO}
              style={{
                paddingTop: 8 * HEIGHT_SCALE_RATIO,
                paddingBottom: 16 * HEIGHT_SCALE_RATIO,
              }}
            />
          );
        }
        return renderFooter ? renderFooter : <View />;
      }}
      {...props}
    />
  );
};
// @ts-ignore
export default memo(PFlatList);
