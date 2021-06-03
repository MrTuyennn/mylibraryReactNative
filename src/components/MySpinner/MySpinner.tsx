import { HEIGHT, ptColor, WIDTH, WIDTH_SCALE_RATIO } from 'constants/style';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { SkypeIndicator } from 'react-native-indicators';
import Modal from 'react-native-modal';

export interface MySpinnerProps {}

export default class MySpinner extends React.PureComponent<
  MySpinnerProps,
  any
> {
  static instance: any = null;

  static show() {
    if (MySpinner.instance) {
      MySpinner.instance.setState({
        visible: true,
      });
    }
  }

  static hide() {
    if (MySpinner.instance) {
      MySpinner.instance.setState({
        visible: false,
      });
    }
  }
  constructor(props: MySpinnerProps) {
    super(props);
    MySpinner.instance = this;
    this.state = {
      visible: false,
    };
  }

  public render() {
    if (MySpinner?.instance?.state?.visible) {
      return (
        <Modal
          deviceWidth={WIDTH}
          deviceHeight={HEIGHT}
          //backdropOpacity={1}
          animationIn="fadeIn"
          animationInTiming={500}
          animationOutTiming={500}
          isVisible={MySpinner?.instance?.state?.visible}
          onBackdropPress={() => MySpinner.hide()}
          onSwipeComplete={() => MySpinner.hide()}
          onBackButtonPress={() => MySpinner.hide()}>
          <View
            style={[
              {...StyleSheet.absoluteFillObject},
              {
                position: 'absolute',
                width: '100%',
                height: HEIGHT,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
              },
            ]}>
            <View
              style={{
                width: WIDTH,
                height: HEIGHT,
                borderRadius: 4 * WIDTH_SCALE_RATIO,
                backgroundColor: '#00000030',
              }}>
              <SkypeIndicator
                color={ptColor.appColor}
                size={40 * WIDTH_SCALE_RATIO}
              />
            </View>
          </View>
        </Modal>
      );
    }
    return null;
  }
}
