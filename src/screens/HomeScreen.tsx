import {IconMess, IconPlush, LogoInsta} from 'assets';
import PButton from 'components/Button/PButton';
import PDivider from 'components/Divider/PDivider';
import BaseScreen from 'components/Header/BaseScreen';
import {ModalNotif} from 'components/Modal/ModalNotif';
import Post from 'components/Post/Post';
import Stories from 'components/Story/Stories';
import {HEIGHT_SCALE_RATIO, ptColor} from 'constants/style';
import React, {useRef, useMemo, useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {userList} from 'components/Story/userList';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import RenderAccount from 'components/ModalShare/RenderAccount';
import HeaderModalShare from 'components/ModalShare/HeaderModalShare';

interface Props {
  navigation?: any;
}

const HomeScreen = (props: Props) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '70%', '90%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  // callbacks close
  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );
  const renderItem = useCallback(
    ({item}) => (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    [],
  );
  return (
    <BottomSheetModalProvider>
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
            <Post
              onClickShare={() => {
                console.log('?');
                handlePresentModalPress();
              }}
            />
          </View>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <HeaderModalShare />
            <BottomSheetFlatList
              data={userList || []}
              // keyExtractor={i => i}
              renderItem={({item}) => {
                return <RenderAccount item={item} />;
              }}
              contentContainerStyle={styles.contentContainer}
            />
          </BottomSheetModal>
        </ScrollView>
      </BaseScreen>
    </BottomSheetModalProvider>
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
    alignItems: 'center',
    marginTop: 20 * HEIGHT_SCALE_RATIO,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
});
export default HomeScreen;
