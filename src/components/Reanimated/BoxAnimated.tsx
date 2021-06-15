import PButton from 'components/Button/PButton';
import { ptColor } from 'constants/style';
import React from 'react';
import { View } from 'react-native';
import Animated, {
    Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming
} from 'react-native-reanimated';
interface Props {}

const BoxAnimated = (props: Props) => {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      height: withTiming(randomWidth.value, config),
      width: withTiming(randomWidth.value, config),
    };
  });

  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value * 50}],
    };
  });

  const offset1 = useSharedValue(0);

  const animatedStyles1 = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset1.value * 70}],
    };
  });

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Animated.View
        style={[
          {
            height: 20,
            width: 20,
            borderRadius: 20 / 2,
            backgroundColor: ptColor.blue3,
          },
          animatedStyles,
        ]}
      />
      <Animated.View
        style={[
          {
            height: 20,
            width: 20,
            borderRadius: 20 / 2,
            backgroundColor: ptColor.yellow,
          },
          animatedStyles1,
        ]}
      />
      <Animated.View
        style={[
          {
            width: 200,
            height: 80,
            backgroundColor: ptColor.greenSuccess,
            margin: 30,
          },
          style,
        ]}></Animated.View>
      <PButton
        onPress={() => {
          randomWidth.value = Math.random() * 86;
          offset.value = Math.random();
          offset1.value = withSpring(Math.random());
        }}
        containerStyle={{
          marginTop: 100,
        }}
      />
    </View>
  );
};

export default BoxAnimated;
