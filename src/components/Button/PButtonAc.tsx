import {FS, HEIGHT_SCALE_RATIO, ptColor} from 'constants/style';
import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

interface Props {
  onPress?: () => void;
}

const PButtonAc = (props: Props) => {
  return (
    <View style={styles.containerStyle}>
      <TouchableHighlight
        activeOpacity={0.1}
        underlayColor="#DDDDDD"
        onPress={props.onPress}
        style={styles.buttonStyle}>
        <Text style={styles.titleStyle}>Chỉnh sửa trang cá nhân</Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 10 * HEIGHT_SCALE_RATIO,
    height: 35,
    width: '100%',
    justifyContent: 'center',
    marginTop: 5 * HEIGHT_SCALE_RATIO,
  },
  buttonStyle: {
    height: 35,
    borderWidth: 1,
    borderColor: ptColor.textPlaceholderColor,
    borderRadius: 5,
  },
  titleStyle: {
    fontSize: FS(10),
    marginVertical: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default PButtonAc;
