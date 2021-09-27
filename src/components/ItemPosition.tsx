import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
  children?: React.ReactNode;
}

const ItemPosition = (props: Props) => {
  const { top, right, left, bottom, children } = props;
  return (
    <View style={[styles.itemPosition, { top, right, bottom, left }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  itemPosition: {
    position: 'absolute',
  },
});

export default memo(ItemPosition);
