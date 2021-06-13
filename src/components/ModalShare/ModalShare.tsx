import {HEIGHT, ptColor, WIDTH} from 'constants/style';
import * as React from 'react';
import {View, StyleSheet, Text, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
export interface ModalShareProps {
  styleContainer?: ViewStyle;
}

export default class ModalShareComponent extends React.Component<
  ModalShareProps,
  any
> {
  constructor(props: ModalShareProps) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  show() {
    this.setState({visible: true});
  }
  hide(onDone = () => {}) {
    this.setState({visible: false}, () => {
      setTimeout(() => {
        onDone();
      }, 310);
    });
  }

  public render() {
    const {visible} = this.state;
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
          justifyContent: 'flex-end',
        }}
        {...this.props}>
        <View
          style={[
            {
              padding: 10,
              borderTopLeftRadius: 18,
              borderTopRightRadius: 18,
              backgroundColor: ptColor.white,
            },
            this.props.styleContainer,
          ]}>
          {this.props.children}
        </View>
      </Modal>
    );
  }
}
