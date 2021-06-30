import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Dimensions,
  FlatList,
  Image,
  Animated,
} from 'react-native';
import {ptColor} from 'constants/style';

const imageRes = [
  {
    image:
      'https://cdn-images.farfetch-contents.com/16/08/87/73/16088773_30343792_1000.jpg',
  },
  {
    image:
      'https://cdn-images.farfetch-contents.com/16/08/87/73/16088773_30343794_1000.jpg',
  },
  {
    image:
      'https://cdn-images.farfetch-contents.com/16/08/87/73/16088773_30343795_1000.jpg',
  },
  {
    image:
      'https://cdn-images.farfetch-contents.com/16/08/87/73/16088773_30341948_1000.jpg',
  },
];

const {height, width} = Dimensions.get('screen');

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * 0.75;
const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;
const CarouselFlatlist = () => {
  const scrollY = React.useRef(new Animated.Value(0))?.current;
  return (
    <View>
      <StatusBar hidden />
      <View style={{height: ITEM_HEIGHT, overflow: 'hidden'}}>
        <Animated.FlatList
          data={imageRes}
          keyExtractor={(_, index) => index.toString()}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          bourne={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          renderItem={({item, index}) => {
            return (
              <View>
                <Image source={{uri: item.image}} style={styles.styleImage} />
              </View>
            );
          }}
        />
      </View>
      <View style={styles.pagination}>
        {imageRes?.map((_, index) => {
          return <View key={index} style={styles.dot}></View>;
        })}
        <Animated.View
          style={[
            styles.dotIndicator,
            {
              transform: [
                {
                  translateY: Animated.divide(scrollY, ITEM_HEIGHT).interpolate(
                    {
                      inputRange: [0, 1],
                      outputRange: [0, DOT_INDICATOR_SIZE],
                    },
                  ),
                },
              ],
            },
          ]}></Animated.View>
      </View>
    </View>
  );
};

export default CarouselFlatlist;

const styles = StyleSheet.create({
  styleImage: {
    height: ITEM_HEIGHT,
    width: ITEM_WIDTH,
    resizeMode: 'cover',
  },
  pagination: {
    position: 'absolute',
    top: width / 2,
    left: 20,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: ptColor.black,
    marginBottom: DOT_SPACING,
  },
  dotIndicator: {
    width: DOT_INDICATOR_SIZE,
    height: DOT_INDICATOR_SIZE,
    borderRadius: DOT_INDICATOR_SIZE,
    borderWidth: 1,
    borderColor: ptColor.black,
    position: 'absolute',
    top: -DOT_SIZE / 2,
    left: -DOT_SIZE / 2,
  },
});
