import PTouchableOpacity from 'components/Button/PTouchableOpacity';
import {FS, HEIGHT_SCALE_RATIO} from 'constants/style';
import React, {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';

type Ref = {
  focus: () => void;
} | null;
interface ModalPickerProps {
  ref?: any;
  onPressSelect?: (...args: any) => void;
}

type MenuOptions = {
  type?: number;
  text?: string;
};

const MenuOptions: MenuOptions[] = [
  {
    type: 0,
    text: 'Báo cáo ...',
  },
  {
    type: 1,
    text: 'Bật thông báo về bài viết',
  },
  {
    type: 2,
    text: 'Sao chép liên kết',
  },
  {
    type: 3,
    text: 'Chia sẽ lên ...',
  },
  {
    type: 4,
    text: 'Bỏ theo dõi',
  },
  {
    type: 5,
    text: 'Ẩn',
  },
];

const ModalPicker = forwardRef((props: ModalPickerProps, ref) => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpenModal = () => {
    if (modalizeRef.current) {
      modalizeRef.current.open();
    }
  };

  useImperativeHandle(ref, () => ({
    onOpenModal,
  }));
  useEffect(() => {
    onOpenModal();
  }, []);

  const handleSelect = (options: any) => {
    if (props.onPressSelect) props.onPressSelect(options);
    if (modalizeRef.current) {
      modalizeRef.current.close();
    }
  };

  const renderContent = () => {
    return (
      <View style={styles.Container}>
        {MenuOptions.map((options, index) => {
          return (
            <PTouchableOpacity
              key={index}
              onPress={() => {
                handleSelect(options);
              }}>
              <Text style={styles.styleFont}>{options.text}</Text>
            </PTouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <Portal>
      <Modalize adjustToContentHeight={true} ref={modalizeRef}>
        {renderContent()}
      </Modalize>
    </Portal>
  );
});

export default ModalPicker;

const styles = StyleSheet.create({
  Container: {
    marginHorizontal: 10 * HEIGHT_SCALE_RATIO,
    marginVertical: 18 * HEIGHT_SCALE_RATIO,
  },
  styleFont: {
    fontSize: FS(15),
    marginVertical: 10,
  },
});
