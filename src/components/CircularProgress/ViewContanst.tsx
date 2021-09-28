import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CircularProgress from './CircularProgress';

interface Props {}

const ViewContanst = (props: Props) => {
  return (
    <View style={styles.viewContainer}>
      <CircularProgress>
        <Text>{'<3'}</Text>
      </CircularProgress>
    </View>
  );
};

export default ViewContanst;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
