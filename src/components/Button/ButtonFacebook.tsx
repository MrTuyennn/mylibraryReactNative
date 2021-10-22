import {IconFacebook} from 'assets/svgs';
import {
  HEIGHT_SCALE_RATIO,
  ptColor,
  WIDTH,
  WIDTH_SCALE_RATIO,
} from 'constants/style';
import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import PTouchableOpacity from './PTouchableOpacity';

interface Props {
  buttonContainer?: StyleProp<ViewStyle>;
  styleTitle?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const ButtonFacebook = (props: Props) => {
  const {buttonContainer, styleTitle, onPress} = props;
  return (
    <PTouchableOpacity
      onPress={onPress}
      style={[buttonContainer, styles.buttonContainer]}>
      <IconFacebook />
      <Text style={[styleTitle, styles.styleTitle]}>Login with Google</Text>
    </PTouchableOpacity>
  );
};

export default ButtonFacebook;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 45 * HEIGHT_SCALE_RATIO,
    width: (WIDTH - 150) * WIDTH_SCALE_RATIO,
    backgroundColor: ptColor.blue,
    borderRadius: 8 * HEIGHT_SCALE_RATIO,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10 * HEIGHT_SCALE_RATIO,
    flexDirection: 'row',
    marginVertical: 10 * HEIGHT_SCALE_RATIO,
  },
  styleTitle: {
    color: ptColor.white,
    marginLeft: 12 * WIDTH_SCALE_RATIO,
  },
});
