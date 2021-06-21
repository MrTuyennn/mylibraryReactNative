import {HEIGHT_SCALE_RATIO} from 'constants/style';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  typeFunc?: (...args: any[]) => any;
  menuOption?: {
    _id?: String;
    func?: () => void;
    title?: String;
  };
}

const ChildOption = (props: Props) => {
  const {typeFunc, menuOption} = props;
  return (
    <>
      <TouchableOpacity
        onPress={props.typeFunc}
        style={[styles.container, styles.containerFlatlist]}>
        <Text>{menuOption?.title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10 * HEIGHT_SCALE_RATIO,
  },
  containerFlatlist: {
    marginTop: 15 * HEIGHT_SCALE_RATIO,
  },
});

export default ChildOption;
