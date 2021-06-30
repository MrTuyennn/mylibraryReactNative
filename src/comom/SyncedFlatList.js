import {userList} from 'components/Story/userList';
import {ptColor} from 'constants/style';
import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
const IMAGE_SIZE = 80;
const SPASING = 10;

const {height, width} = Dimensions.get('screen');

const SyncedFlatList = () => {
  const topref = React.useRef();
  const thumref = React.useRef();
  const [activeIndex, setactiveIndex] = useState(0);
  const scrollToActiveIndex = index => {
    setactiveIndex(index);
    topref?.current?.scrollToOffset({
      offset: index * width,
      animation: true,
    });

    if (index * (IMAGE_SIZE + SPASING) - IMAGE_SIZE / 2 > width / 2) {
      thumref?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPASING) - width / 2 + IMAGE_SIZE / 2,
        animation: true,
      });
    } else {
      thumref?.current?.scrollToOffset({
        offset: 0,
        animation: true,
      });
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        ref={topref}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={userList}
        keyExtractor={item => item.id.toString()}
        onMomentumScrollEnd={ev => {
          scrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / width),
          );
        }}
        renderItem={({item, index}) => {
          return (
            <View key={index} style={{height, width}}>
              <Image
                source={{uri: item?.avatar}}
                style={styles.styleImg}
              />
            </View>
          );
        }}
      />
      <FlatList
        ref={thumref}
        horizontal
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          paddingHorizontal: SPASING,
        }}
        showsHorizontalScrollIndicator={false}
        data={userList}
        style={{
          position: 'absolute',
          bottom: IMAGE_SIZE ,
        }}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                scrollToActiveIndex(index);
              }}>
              <Image
                source={{uri: item?.avatar}}
                style={{
                  height: IMAGE_SIZE,
                  width: IMAGE_SIZE,
                  borderRadius: 12,
                  marginRight: SPASING,
                  borderWidth: 2,
                  borderColor:
                    activeIndex === index ? ptColor.white : 'transparent',
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ptColor.white,
  },
  styleImg: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SyncedFlatList;
