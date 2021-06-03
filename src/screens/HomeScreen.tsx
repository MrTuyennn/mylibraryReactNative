import PButton from 'components/Button/PButton';
import BaseScreen from 'components/Header/BaseScreen';
import { ModalNotif } from 'components/Modal/ModalNotif';
import { ptColor } from 'constants/style';
import React from 'react';
import { View } from 'react-native';

interface Props {
  navigation?: any;
}

const HomeScreen = (props: Props) => {
  const handle = (): void => {
    ModalNotif(
      'renders',
      'tuyen',
      'left',
      () => undefined,
      'right',
      () => undefined,
    );

    console.log('?');
  };

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
        <PButton onPress={() => handle()} />
      </View>
    </BaseScreen>
  );
};

export default HomeScreen;
