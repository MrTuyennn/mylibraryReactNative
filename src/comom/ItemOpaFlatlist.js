import React from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  View,
  FlatList,
  Image,
  Animated,
} from 'react-native';
import {ptColor} from 'constants/style';
const ImageRes = [
  {
    id: '1',
    image: 'https://wallpapercave.com/wp/wp8835727.png',
  },
  {
    id: '2',
    image: 'https://wallpapercave.com/wp/wp8933715.jpg',
  },
  {
    id: '3',
    image: 'https://cdn.myanimelist.net/images/characters/7/443690.jpg',
  },
  {
    id: '4',
    image:
      'https://i.pinimg.com/originals/df/23/7d/df237d8c80db42d4b238003da84603cb.png',
  },
];

const {height, width} = Dimensions.get('screen');

const imageW = width * 0.7;
const imageH = height * 0.5;

const ItemOpaFlatlist = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={[StyleSheet.absoluteFillObject]}>
        {ImageRes.map((item, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const opacity = scrollX.interpolate({
            inputRange: inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <Animated.Image
              key={`image-${index}`}
              source={{uri: item.image}}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  opacity: opacity,
                },
              ]}
              blurRadius={10}></Animated.Image>
          );
        })}
      </View>
      <Animated.FlatList
        data={ImageRes}
        keyExtractor={(_, index) => _.id.toString()}
        horizontal
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => {
          return (
            <View
              style={{width, justifyContent: 'center', alignItems: 'center'}}
              key={index}>
              <Image style={styles.iamgestyle} source={{uri: item?.image}} />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ptColor.black,
  },
  iamgestyle: {
    height: imageH,
    width: imageW,
    resizeMode: 'cover',
    borderRadius: 16,
  },
});

export default ItemOpaFlatlist;
