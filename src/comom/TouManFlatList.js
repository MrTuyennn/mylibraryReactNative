import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  Animated,
  Dimensions,
  Image,
} from 'react-native';
import {ptColor, FS, style} from 'constants/style';
import Svg, {Rect} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
const data = [
  {id: '0', key: 'left-space'},
  {
    id: '1',
    image: 'https://wallpapercave.com/wp/wp8835727.png',
    title: 'Tokyo Revenger',
    name: 'Mickey',
  },
  {
    id: '2',
    image: 'https://wallpapercave.com/wp/wp9110513.png',
    title: 'Tokyo Revenger',
    name: 'Draken',
  },
  {
    id: '3',
    image: 'https://static.zerochan.net/Hanagaki.Takemichi.full.3292114.jpg',
    title: 'Tokyo Revenger',
    name: 'Takemichi',
  },
  {
    id: '4',
    image:
      'https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7372392-15.jpg',
    title: 'Tokyo Revenger',
    name: 'Smiley',
  },
  {
    id: '5',
    image:
      'https://www.hlj.com/media/catalog/product/cache/acedba8d3f43cedb2fbb4f1aa3b47451/j/s/jsy71061_0.jpg',
    title: 'Tokyo Revenger',
    name: 'Panji',
  },
  {id: '6', key: 'right-space'},
];

const {height, width} = Dimensions.get('screen');

const SPASING = 10;
const ITEM_SIZE = width * 0.72;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.6;
const Backdrop = ({data, scrollX}) => {
  return (
    <View style={{position: 'absolute', width, height: BACKDROP_HEIGHT}}>
      <FlatList
        data={data}
        keyExtractor={item => item.key}
        renderItem={({item, index}) => {
          return (
            <MaskedView
              style={{position: 'absolute'}}
              maskElement={
                <Image
                  source={item.image}
                  style={{
                    width,
                    height: BACKDROP_HEIGHT,
                    resizeMode: 'cover',
                  }}
                />
              }></MaskedView>
          );
        }}
      />
    </View>
  );
};

const TouManFlatList = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  useEffect(() => {});
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop data={data} scrollX={scrollX} />
      <Animated.FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        horizontal
        snapToInterval={ITEM_SIZE}
        decelerationRate={0}
        bourne={false}
        keyExtractor={(_, index) => _.id.toString()}
        contentContainerStyle={{
          alignItems: 'center',
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
        renderItem={({item, index}) => {
          if (!item.image) {
            return <View style={{width: SPACER_ITEM_SIZE}}></View>;
          }
          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });
          return (
            <View style={{width: ITEM_SIZE}}>
              <Animated.View
                style={{
                  marginHorizontal: SPASING,
                  padding: SPASING * 2,
                  justifyContent: 'center',
                  backgroundColor: ptColor.white,
                  borderRadius: 34,
                  width: width / 1.5,
                  transform: [{translateY}],
                }}>
                <Image style={styles.postImage} source={{uri: item.image}} />
                <Text style={styles.styleTitle}>{item.title}</Text>
                <Text style={[style.textCaption, styles.styleName]}>
                  {item.name}
                </Text>
              </Animated.View>
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
  },
  postImage: {
    height: height / 2,
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 34,
    padding: SPASING,
  },
  styleTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: FS(18),
    marginVertical: 10,
  },
  styleName: {
    textAlign: 'center',
    fontSize: FS(18),
    color: ptColor.bgRed,
  },
});
export default TouManFlatList;
