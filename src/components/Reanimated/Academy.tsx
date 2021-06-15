import React from 'react';
import {View, Text, Button} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  runOnUI,
  runOnJS,
} from 'react-native-reanimated';
interface Props {}

const Academy = (props: Props) => {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  function someWorklet(greeting: any) {
    'worklet';
    console.log("Hey I'm running on the UI thread");
  }

  function onPress() {
    runOnUI(someWorklet)('Howdy');
  }

  const width = 135.5;

  function otherWorklet() {
    'worklet';
    console.log('Captured width is', width);
  }

  function returningWorklet() {
    'worklet';
    return "I'm back";
  }

  function someWorklet1() {
    'worklet';
    let what = returningWorklet();
    console.log('On the UI thread, other worklet says', what);
  }

  function callback(text: string) {
    console.log('Running on the RN thread', text);
  }

  function someWorklet2() {
    'worklet';
    console.log("I'm on UI but can call methods from the RN thread");
    runOnJS(callback)('can pass arguments too');
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <Animated.View
        style={[
          {width: 100, height: 80, backgroundColor: 'black', margin: 30},
          style,
        ]}
      />
      <Button
        title="toggle"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
          someWorklet('renders');
          onPress();
          otherWorklet();
          someWorklet1();
          someWorklet2();
        }}
      />
    </View>
  );
};

export default Academy;
