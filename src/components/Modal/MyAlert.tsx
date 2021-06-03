import {
  HEIGHT,
  HEIGHT_SCALE_RATIO,
  ptColor,
  WIDTH,
  WIDTH_SCALE_RATIO,
} from 'constants/style';
import * as React from 'react';
import {KeyboardAvoidingView, View, ViewStyle, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

export interface MyAlertProps {
  styleContainer?: ViewStyle;
}

export default class MyAlert extends React.PureComponent<MyAlertProps, any> {
  static instance: any = null;

  static show(
    title?: string | '',
    description?: string,
    buttonLeft?: string,
    onPressButtonLeft?: () => {} | undefined,
    buttonRight?: string,
    onPressButtonRight?: () => {} | undefined,
  ) {
    console.log('show', title, description, buttonLeft);
    if (MyAlert.instance) {
      MyAlert.instance.setState({
        visible: true,
        title,
        description,
        buttonLeft,
        onPressButtonLeft,
        buttonRight,
        onPressButtonRight,
      });
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

  onpressLeft = () => {
    MyAlert.hide(this.state.onPressButtonLeft);
  };

  onpressRight = () => {
    MyAlert.hide(this.state.onPressButtonRight);
  };

  constructor(props: MyAlertProps) {
    super(props);
    MyAlert.instance = this;
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
    // console.log('MyAlert', MyAlert?.instance?.state?.visible);
    const {styleContainer} = this.props;
    return (
      <Modal
        deviceWidth={WIDTH}
        deviceHeight={HEIGHT}
        animationIn="fadeInUp"
        animationInTiming={300}
        animationOutTiming={300}
        isVisible={visible}
        swipeDirection={undefined}
        onBackdropPress={() => this.setState({visible: false})}
        onSwipeComplete={() => this.setState({visible: false})}
        onBackButtonPress={() => this.setState({visible: false})}
        backdropOpacity={0.6}
        hasBackdrop={true}
        style={{
          margin: 0,
          padding: 0,
        }}
        {...this.props}>
        <KeyboardAvoidingView behavior="position" enabled>
          <View
            style={[
              {
                padding: 16 * HEIGHT_SCALE_RATIO,
                backgroundColor: 'white',
                borderRadius: 10 * WIDTH_SCALE_RATIO,
                marginHorizontal: 30 * WIDTH_SCALE_RATIO,
              },
              styleContainer,
            ]}>
            {title && (
              <Text style={{fontSize: 16, color: ptColor.black}}>{title}</Text>
            )}
            {description && (
              <Text style={{fontSize: 16, color: ptColor.black}}>
                {description}
              </Text>
            )}
            {buttonLeft && (
              <Text style={{fontSize: 16, color: ptColor.black}}>
                {buttonLeft}
              </Text>
            )}
            {buttonRight && (
              <Text style={{fontSize: 16, color: ptColor.black}}>
                {buttonRight}
              </Text>
            )}
            {onPressButtonLeft && (
              <TouchableOpacity onPress={this.onpressLeft}></TouchableOpacity>
            )}
            {onPressButtonRight && (
              <TouchableOpacity onPress={this.onpressRight}></TouchableOpacity>
            )}
            {this.props.children}
          </View>
        </KeyboardAvoidingView>
      </Modal>
    );
  }
}
