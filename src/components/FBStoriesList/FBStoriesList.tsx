import * as React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Animated, {Easing} from 'react-native-reanimated';
import {HEIGHT_SCALE_RATIO, ptColor} from 'constants/style';
import {IMAGEPATH} from 'constants/imageConstanst';

const {Value, timing} = Animated;

export interface AppProps {}

export interface AppState {}

export default class AppComponent extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      scroll_x: new Value(0),
    };
  }

  _onScroll = (e: any) => {
    const new_x_scroll_value = e.nativeEvent.contentOffset.x;

    // update scroll_x_position
    this.setState({
      scroll_x: new Value(new_x_scroll_value),
    });
  };

  public render() {
    const {scroll_x}: any = this.state;

    //  personal car container
    const _card_width = scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [100, 50],
      extrapolate: 'clamp',
    });

    const _card_height = scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [170, 50],
      extrapolate: 'clamp',
    });
    const _card_position_top = scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 60],
      extrapolate: 'clamp',
    });

    const _card_position_left = scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [10, 0],
      extrapolate: 'clamp',
    });

    const _card_border_left_radius = scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [16, 0],
      extrapolate: 'clamp',
    });

    // image container
    const _image_container_height = scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [100, 40],
      extrapolate: 'clamp',
    });

    const _image_container_margin = scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 4],
      extrapolate: 'clamp',
    });
    const _image_containerborder_radius = scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 40],
      extrapolate: 'clamp',
    });

    // cta container
    const _cta_container_padding_top = scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [20, -20],
      extrapolate: 'clamp',
    });
    const _cta_container_opacity = scroll_x.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    // Icon
    const _icon_scale = scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0.6],
      extrapolate: 'clamp',
    });
    const _icon_position_top = scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [-15, -28],
      extrapolate: 'clamp',
    });

    const _icon_position_right = scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [33, -3],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.personal_card_container,
            {
              width: _card_width,
              height: _card_height,
              top: _card_position_top,
              left: _card_position_left,
              borderTopLeftRadius: _card_border_left_radius,
              borderBottomLeftRadius: _card_border_left_radius,
            },
          ]}>
          {/* Image container */}
          <Animated.View
            style={[
              styles.image_container,
              {
                height: _image_container_height,
                margin: _image_container_margin,
                borderRadius: _image_containerborder_radius,
              },
            ]}>
            <Image source={IMAGEPATH.imageStory2} style={styles.image} />
          </Animated.View>

          <Animated.View style={[styles.cta_container, {}]}>
            <Animated.Text
              style={[
                styles.text,
                {
                  paddingTop: _cta_container_padding_top,
                  opacity: _cta_container_opacity,
                },
              ]}>
              Create a {'\n'} story
            </Animated.Text>

            {/* Icon */}
            <Animated.View
              style={[
                styles.icon_container,
                {
                  transform: [
                    {
                      scale: _icon_scale,
                    },
                  ],
                  top: _icon_position_top,
                  right: _icon_position_right,
                },
              ]}>
              <Icon name="plus" size={18} color={'#ffffff'} />
            </Animated.View>
          </Animated.View>
        </Animated.View>
        <ScrollView
          style={[styles.scroll_view]}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={this._onScroll}
          scrollEventThrottle={16}>
          <View style={styles.fake_card_ghost} />
          <View style={styles.fake_card} />
          <View style={styles.fake_card} />
          <View style={styles.fake_card} />
          <View style={styles.fake_card} />
          <View style={styles.fake_card} />
          <View style={styles.fake_card} />
          <View style={styles.column_spacer} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40 * HEIGHT_SCALE_RATIO,
    position: 'relative',
  },
  personal_card_container: {
    backgroundColor: ptColor.white,
    position: 'absolute',
    zIndex: 10,
    elevation: 10,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  image_container: {
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
  },
  cta_container: {
    position: 'relative',
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  icon_container: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: '#357Be5',
    position: 'absolute',
    borderWidth: 3,
    borderColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll_view: {
    flexDirection: 'row',
  },
  fake_card: {
    width: 100,
    height: 170,
    backgroundColor: '#dddddd',
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 16,
  },
  fake_card_ghost: {
    backgroundColor: 'white',
    marginLeft: 10,
    borderWidth: 0,
    width: 100,
    height: 170,
  },
  column_spacer: {
    width: 10,
    height: 170,
  },
});
