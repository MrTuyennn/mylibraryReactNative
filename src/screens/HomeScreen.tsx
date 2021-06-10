import {IconMess, IconPlush, LogoInsta} from 'assets';
import PButton from 'components/Button/PButton';
import PDivider from 'components/Divider/PDivider';
import BaseScreen from 'components/Header/BaseScreen';
import {ModalNotif} from 'components/Modal/ModalNotif';
import Post from 'components/Post/Post';
import Stories from 'components/Story/Stories';
import {ptColor} from 'constants/style';
import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

interface Props {
  navigation?: any;
}

const HomeScreen = (props: Props) => {
  const handleSuccess = (): void => {
    ModalNotif(
      'success',
      'Hệ thống xử lý thành công !!!',
      'Hủy',
      () => {
        console.log('oke nha');
      },
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
        title: '',
        leftIcon: <LogoInsta color={ptColor.black} />,
        rightIcon: <IconPlush height={20} width={20} color={ptColor.black} />,
        rightIcon2: <IconMess height={20} width={20} color={ptColor.black} />,
      }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: ptColor.white,
        }}>
        {/* View Storis */}
        <View>
          <Stories />
        </View>
        {/* View Storis */}
        <PDivider />
        {/* View Post */}
        <View>
          <Post />
        </View>
        {/* View Post */}
      </ScrollView>
    </BaseScreen>
  );
};

export default HomeScreen;
