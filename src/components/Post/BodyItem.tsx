import {HEIGHT, WIDTH} from 'constants/style';
import React from 'react';
import {View, Text, Image} from 'react-native';

const BodyItem = ({item}: any) => {
  console.log('item', item);
  return (
    <View
      style={{
        width: WIDTH,
        height: HEIGHT / 3,
      }}>
      <Image
        style={{
          height: '100%',
          width: '100%',
        }}
        source={{uri: item.url}}
      />
    </View>
  );
};

export default BodyItem;
