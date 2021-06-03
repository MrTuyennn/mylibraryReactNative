import BaseScreen from 'components/Header/BaseScreen';
import {ptColor} from 'constants/style';
import React from 'react';
import {View, Text} from 'react-native';

interface Props {
  navigation?: any;
}

const HomeScreen = (props: Props) => {
  return (
    <BaseScreen
      navigation={props.navigation}
      appBar={{
        title: 'Trang chủ',
      }}>
      <View style={{flex: 1, backgroundColor: ptColor.white}}></View>
    </BaseScreen>
  );
};

export default HomeScreen;
