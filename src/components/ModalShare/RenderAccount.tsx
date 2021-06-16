import React from 'react';
import {View, Text} from 'react-native';

interface Props {}

const RenderAccount = ({item}: any) => {

  console.log('item Account',item);
  return (
    <View>
      <Text>Tuyên</Text>
    </View>
  );
};

export default RenderAccount;
