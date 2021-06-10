import {HEIGHT, ptColor, WIDTH} from 'constants/style';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import BodyItem from './BodyItem';
import {dummyData} from './Data';

interface Props {}
let flatList;

// function infiniteScroll(dataList: any) {
//   const numberOfData = dataList.length;
//   let scrollValue = 0,
//     scrolled = 0;

//   setInterval(function () {
//     scrolled++;
//     if (scrolled < numberOfData) scrollValue = scrollValue + WIDTH;
//     else {
//       scrollValue = 0;
//       scrolled = 0;
//     }

//     this.flatList.scrollToOffset({animated: true, offset: scrollValue});
//   }, 3000);
// }
const BodyPost = (props: Props) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, WIDTH);
  const [dataList, setDataList] = useState(dummyData);

  useEffect(() => {
    setDataList(dummyData);
    // infiniteScroll(dataList);
  });

  if (dummyData && dummyData.length) {
    return (
      <View>
        <FlatList
          data={dummyData}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <BodyItem item={item} />;
          }}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {x: scrollX}}},
          ])}
        />

        <View style={styles.dotView}>
          {dummyData.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={i}
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: ptColor.white,
                  margin: 8,
                  borderRadius: 5,
                  top: -20,
                  zIndex: 2,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  }

  console.log('Please provide Images');
  return null;
};

export default BodyPost;
const styles = StyleSheet.create({
  dotView: {flexDirection: 'row', justifyContent: 'center'},
});
