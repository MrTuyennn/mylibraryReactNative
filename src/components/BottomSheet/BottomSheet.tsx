import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export interface BottomSheetProps {}

export default class BottomSheetComponent extends React.Component<
  BottomSheetProps,
  any
> {
  constructor(props: BottomSheetProps) {
    super(props);
  }

  public render() {
    return (
      <View>
        <Text>BottomSheet Component</Text>
      </View>
    );
  }
}
