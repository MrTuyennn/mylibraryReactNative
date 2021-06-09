import PButton from 'components/Button/PButton';
import BaseScreen from 'components/Header/BaseScreen';
import {ModalNotif} from 'components/Modal/ModalNotif';
import {ptColor} from 'constants/style';
import React from 'react';
import {View} from 'react-native';

interface Props {
  navigation?: any;
}

const HomeScreen = (props: Props) => {
  const handleSuccess = (): void => {
    ModalNotif(
      'success',
      'Hệ thống xử lý thành công !!!',
      'Hủy',
      () => {console.log('oke nha')},
      'Đồng ý',
      () => console.log('Nguyễn Ngọc Tuyên 2 '),
    );
  };
  const handlefail = () => {
    ModalNotif(
      'fail',
      'Hệ thống xử lý thất bại !!!',
      'Hủy',
      (): any => {},
      'Đồng ý',
      (): any => {},
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
        <PButton
          containerStyle={{
            marginVertical: 20,
            width: '30%',
          }}
          title="success"
          onPress={() => handleSuccess()}
        />
        <PButton
          containerStyle={{
            marginVertical: 20,
            width: '30%',
          }}
          title="fail"
          onPress={() => handlefail()}
        />
      </View>
    </BaseScreen>
  );
};

export default HomeScreen;
