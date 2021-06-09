import PDivider from 'components/Divider/PDivider';
import {
  FS,
  HEIGHT,
  HEIGHT_SCALE_RATIO,
  ptColor,
  style,
  WIDTH,
  WIDTH_SCALE_RATIO,
} from 'constants/style';
import React, {createRef} from 'react';
import {KeyboardAvoidingView, View, ViewStyle, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import {LOTTIEPATH} from 'constants/lottieConstanst';
import PTouchableOpacity from 'components/Button/PTouchableOpacity';

export interface MyAlertProps {
  styleContainer?: ViewStyle;
}

export default class MyAlert extends React.PureComponent<MyAlertProps, any> {
  animation?: any;
  static instance: any = null;

  static show(
    title?: string | '',
    description?: string,
    buttonLeft?: string,
    onPressButtonLeft?: any,
    buttonRight?: string,
    onPressButtonRight?: any,
  ) {
    if (MyAlert.instance) {
      console.log('có gì', onPressButtonLeft);
      MyAlert.instance.setState({
        visible: true,
        title,
        description,
        buttonLeft,
        onPressButtonLeft,
        buttonRight,
        onPressButtonRight,
      });
      MyAlert.instance?.animation?.play(20, 120);
    }
  }

  static hide = (onDone = () => {}) => {
    if (MyAlert.instance) {
      MyAlert.instance.setState({visible: false}, () => {
        setTimeout(() => {
          onDone();
        }, 310);
      });
    }
  };

  constructor(props: MyAlertProps) {
    super(props);
    MyAlert.instance = this;
    this.animation = createRef();
    this.state = {
      visible: false,
      title: '',
      description: '',
      buttonLeft: '',
      onPressButtonLeft: null,
      buttonRight: '',
      onPressButtonRight: null,
    };
  }
  onpressLeft = () => {
    console.log('fjdfhjdhf');
    MyAlert.hide(this.state.onPressButtonLeft);
  };

  onpressRight = () => {
    MyAlert.hide(this.state.onPressButtonRight);
  };

  UNSAFE_componentWillMount() {
    MyAlert.hide();
  }

  public render() {
    const {
      visible,
      title,
      description,
      buttonLeft,
      onPressButtonLeft,
      onPressButtonRight,
      buttonRight,
    } = this.state;
    const {styleContainer} = this.props;
    return (
      <Modal
        deviceWidth={WIDTH}
        deviceHeight={HEIGHT}
        animationIn="fadeInUp"
        animationInTiming={300}
        animationOutTiming={300}
        swipeDirection={undefined}
        isVisible={MyAlert?.instance?.state?.visible || false}
        // onBackButtonPress Called when the Android back button is pressed
        onBackdropPress={() => {
          MyAlert.hide();
          this.animation.pause();
        }}
        onSwipeComplete={() => MyAlert.hide()}
        style={{
          margin: 0,
          padding: 0,
        }}
        {...this.props}>
        <View
          style={[
            {
              backgroundColor: 'white',
              borderRadius: 10 * WIDTH_SCALE_RATIO,
              marginHorizontal: 30 * WIDTH_SCALE_RATIO,
              flexDirection: 'column',
            },
            styleContainer,
          ]}>
          <View
            style={{
              height: 100 * HEIGHT_SCALE_RATIO,
              width: 100 * HEIGHT_SCALE_RATIO,
              // position: 'absolute',
              // top: -100 * HEIGHT_SCALE_RATIO,
              alignSelf: 'center',
            }}>
            {title === 'success' && (
              <LottieView
                style={{
                  height: '100%',
                  width: '100%',
                }}
                ref={animation => {
                  this.animation = animation;
                }}
                // autoPlay
                loop={false}
                source={LOTTIEPATH.success}
              />
            )}
            {title === 'fail' && (
              <LottieView
                style={{
                  height: '100%',
                  width: '100%',
                }}
                ref={animation => {
                  this.animation = animation;
                }}
                // autoPlay
                loop={false}
                source={LOTTIEPATH.failure}
              />
            )}
          </View>

          {description && (
            <Text
              style={[
                style.textCaption,
                {
                  fontSize: FS(14),
                  color: ptColor.black,
                  textAlign: 'center',
                  margin: 20,
                },
              ]}>
              {description || 'Hệ thống đang xử lý'}
            </Text>
          )}
          <PDivider />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              zIndex: 100,
            }}>
            {buttonLeft ? (
              <PTouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 60 * HEIGHT_SCALE_RATIO,
                }}
                onPress={this.onpressLeft}>
                <Text
                  style={[
                    style.textCaption,
                    {
                      fontSize: FS(16),
                      color: ptColor.black,
                      textAlign: 'center',
                    },
                  ]}>
                  {buttonLeft}
                </Text>
              </PTouchableOpacity>
            ) : null}
            {buttonLeft ? (
              <View
                style={{
                  height: '100%',
                  width: 1,
                  backgroundColor: ptColor.textPlaceholderColor,
                }}
              />
            ) : null}
            {buttonRight ? (
              <PTouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 60 * HEIGHT_SCALE_RATIO,
                }}
                onPress={this.onpressRight}>
                <Text
                  style={[
                    style.textCaption,
                    {
                      fontSize: FS(16),
                      color: ptColor.black,
                      textAlign: 'center',
                    },
                  ]}>
                  {buttonRight}
                </Text>
              </PTouchableOpacity>
            ) : null}
          </View>
        </View>
        {this.props.children}
      </Modal>
    );
  }
}
