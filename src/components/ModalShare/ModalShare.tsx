import PButton from 'components/Button/PButton';
import {userList} from 'components/Story/userList';
import {
  FS,
  HEIGHT_SCALE_RATIO,
  ptColor,
  WIDTH_SCALE_RATIO,
} from 'constants/style';
import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import HeaderModalShare from './HeaderModalShare';
import PTouchableOpacity from 'components/Button/PTouchableOpacity';

interface ModalShareProps {
  onPressSelectShare?: (...args: any[]) => void;
}

const ModalShare = forwardRef((props: ModalShareProps, ref) => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpenModalShare = () => {
    if (modalizeRef.current) {
      modalizeRef.current.open();
    }
  };

  useImperativeHandle(ref, () => ({
    onOpenModalShare,
  }));
  // useEffect(() => {
  //   onOpenModalShare();
  // }, []);

  const handleOnPressShare = (item: any) => {
    if (props.onPressSelectShare) {
      props.onPressSelectShare(item);
    }
    if (modalizeRef.current) {
      modalizeRef.current.close();
    }
  };

  const RenderAccount = ({item, index}: any) => {
    return (
      <PTouchableOpacity
        onPress={() => {
          handleOnPressShare(item);
        }}
        key={index}
        style={[
          styles.container,
          {
            justifyContent: 'space-between',
            marginBottom: 10 * HEIGHT_SCALE_RATIO,
          },
        ]}>
        <View style={[styles.container]}>
          <View style={styles.containerImg}>
            <Image source={{uri: item.avatar}} style={styles.styleImg} />
          </View>
          <View style={styles.containerText}>
            <Text>{item.surname}</Text>
            <Text style={{color: ptColor.textPlaceholderColor}}>
              {item.name}
            </Text>
          </View>
        </View>
        <PButton
          containerStyle={{
            alignItems: 'flex-start',
          }}
          buttonStyle={styles.buttonStyle}
          title="Gửi"
          titleStyle={styles.titleStyle}
        />
      </PTouchableOpacity>
    );
  };

  return (
    <Portal>
      <Modalize
        handlePosition="inside"
        snapPoint={300 * HEIGHT_SCALE_RATIO}
        modalHeight={800 * HEIGHT_SCALE_RATIO}
        HeaderComponent={<HeaderModalShare />}
        panGestureComponentEnabled={true}
        avoidKeyboardLikeIOS={false}
        flatListProps={{
          data: userList,
          renderItem: RenderAccount,
          bounces: false,
          keyExtractor: (item, index) => item.id + index.toString(),
        }}
        ref={modalizeRef}></Modalize>
    </Portal>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 5 * HEIGHT_SCALE_RATIO,
  },
  containerImg: {
    height: 40 * HEIGHT_SCALE_RATIO,
    width: 40 * WIDTH_SCALE_RATIO,
    borderRadius: 40,
  },
  styleImg: {
    height: '100%',
    width: '100%',
    borderRadius: 40,
    resizeMode: 'cover',
  },
  containerText: {
    marginLeft: 10 * HEIGHT_SCALE_RATIO,
  },
  titleStyle: {
    fontSize: FS(8),
    marginHorizontal: 30 * WIDTH_SCALE_RATIO,
  },
  buttonStyle: {
    height: 30 * HEIGHT_SCALE_RATIO,
  },
});
export default ModalShare;
