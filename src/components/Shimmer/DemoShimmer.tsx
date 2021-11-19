import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Shimmer from './Shimmer';

interface Props {}

const DemoShimmer = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.movieContent}>
        <Shimmer autoRun={true} visible={false}>
          <Text>Tuyen</Text>
        </Shimmer>
        <Shimmer autoRun={true} visible={false}>
          <Text>Helllllll</Text>
        </Shimmer>
      </View>
    </View>
  );
};

export default DemoShimmer;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  movieContent: {
    margin: 8,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});
