import {ptColor} from 'constants/style';
import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  Value,
  //   Easing,
  timing,
  Easing as OldEasing,
  // @ts-ignore
  EasingNode,
  spring,
} from 'react-native-reanimated';
export interface TestAnimatedProps {}
const Easing = EasingNode || OldEasing;

export default class TestAnimatedComponent extends React.Component<
  TestAnimatedProps,
  any
> {
  translateY: any;
  opacity: any;
  _config: any;
  _anim: any;
  _config2: any;
  _anim2: any;
  constructor(props: TestAnimatedProps) {
    super(props);
    this.translateY = new Value(-100);

    this.opacity = new Value(0);
    this._config = {
      duration: 1000,
      toValue: 0,
      easing: Easing.ease,
    };
    this._config2 = {
      duration: 1000,
      toValue: [0.2, 0.7, 1],
      easing: Easing.quad,
    };
    this._anim = timing(this.translateY, this._config);
    this._anim2 = timing(this.opacity, this._config2);
  }

  componentDidMount() {}

  public render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View
          style={[
            {height: 100, width: 100, backgroundColor: ptColor.bgRed},
            {transform: [{translateY: this.translateY}], opacity: this.opacity},
          ]}
        />
        <Button
          title="Bắt đầu"
          onPress={() => {
            this._anim.start();
            this._anim2.start();
          }}
        />
      </View>
    );
  }
}
