import PButton from 'components/Button/PButton';
import BaseScreen from 'components/Header/BaseScreen';
import MySpinner from 'components/MySpinner/MySpinner';
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
      <View
        style={{
          flex: 1,
          backgroundColor: ptColor.white,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <PButton onPress={() => MySpinner.show()}/>
        </View>
    </BaseScreen>
  );
};

export default HomeScreen;
