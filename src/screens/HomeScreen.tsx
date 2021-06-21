import {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {IconMess, IconPlush, LogoInsta} from 'assets';
import ChildOption from 'comom/ChildOption';
import PDivider from 'components/Divider/PDivider';
import BaseScreen from 'components/Header/BaseScreen';
import HeaderModalShare from 'components/ModalShare/HeaderModalShare';
import RenderAccount from 'components/ModalShare/RenderAccount';
import Post from 'components/Post/Post';
import Stories from 'components/Story/Stories';
import {userList} from 'components/Story/userList';
import {HEIGHT_SCALE_RATIO, ptColor} from 'constants/style';
import React, {useCallback, useMemo, useRef} from 'react';
import {FlatList, StyleSheet, Text, View, ScrollView} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {MenuOptions} from 'utils/typeString';
interface Props {
  navigation?: any;
}

const HomeScreen = (props: Props) => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const onClose = () => {
    modalizeRef.current?.close();
  };
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
                    onClickMenuOptions={onOpen}
                    onClickShare={() => {
                      handlePresentModalPress();
                    }}
                  />
                </View>
              );
            })}
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <HeaderModalShare />
            <BottomSheetFlatList
              // scrollEnabled={false}
              data={userList || []}
              keyExtractor={i => i.toString()}
              renderItem={({item, index}) => {
                return <RenderAccount item={item} />;
              }}
              contentContainerStyle={styles.contentContainer}
            />
          </BottomSheetModal>
        </ScrollView>
      </BaseScreen>

      {/* Menu Options */}
      <Modalize
        handlePosition="inside"
        handleStyle={{
          top: 13,
          width: 40,
          height: 6,
          backgroundColor: '#bcc0c1',
        }}
        adjustToContentHeight={true}
        withHandle={true}
        ref={modalizeRef}>
        {MenuOptions.map((option, index) => {
          return (
            <ChildOption
              key={index}
              typeFunc={() => {
                onClose();
                console.log('option._id', option._id);
              }}
              menuOption={option}
            />
          );
        })}
      </Modalize>
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
    margin: 10 * HEIGHT_SCALE_RATIO,
  },
  itemContainer: {
    backgroundColor: '#eee',
  },
});
export default HomeScreen;
