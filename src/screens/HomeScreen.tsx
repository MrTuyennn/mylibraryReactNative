import {IconMess, IconPlush, LogoInsta} from 'assets';
import PDivider from 'components/Divider/PDivider';
import BaseScreen from 'components/Header/BaseScreen';
import ModalPicker from 'components/Modalize/ModalPicker';
import ModalShare from 'components/ModalShare/ModalShare';
import Post from 'components/Post/Post';
import Stories from 'components/Story/Stories';
import {HEIGHT_SCALE_RATIO, ptColor} from 'constants/style';
import React, {useRef} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Modalize} from 'react-native-modalize';
interface Props {
  navigation?: any;
  isModal?: any;
}

const HomeScreen = (props: Props) => {
  const isModal = useRef(null);
  const isModalShare = useRef<Modalize>(null);

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
        scrollEnabled={true}
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
        {Array(50)
          .fill(0)
          .map((_, index) => {
            return (
              <View key={index}>
                <Post
                  onClickMenuOptions={() => {
                    // @ts-ignore
                    isModal?.current?.onOpenModal();
                  }}
                  onClickShare={() => {
                    // @ts-ignore
                    isModalShare?.current?.onOpenModalShare();
                  }}
                />
              </View>
            );
          })}
      </ScrollView>

      {/* Modal chọn menu */}
      <ModalPicker
        onPressSelect={options => {
          console.log('INVALID options', options);
        }}
        ref={isModal}
      />

      {/* Modal picker share */}
      <ModalShare
        onPressSelectShare={itemShare => {
          console.log('INVALID itemShare', itemShare);
        }}
        ref={isModalShare}
      />
    </BaseScreen>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    margin: 10 * HEIGHT_SCALE_RATIO,
  },
  itemContainer: {
    backgroundColor: '#eee',
  },
});
export default HomeScreen;
