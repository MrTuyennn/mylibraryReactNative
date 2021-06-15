import {BottomSheetModal} from '@gorhom/bottom-sheet';
import PanGestureHandler from 'components/Reanimated/PanGestureHandler';
import {HEIGHT, ptColor, WIDTH, WIDTH_SCALE_RATIO} from 'constants/style';
import React, {createRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
export interface BottomSheetProps {
  bottomSheetModalRef?: any;
}

export default class BottomSheet extends React.PureComponent<
  BottomSheetProps,
  any
> {
  bottomSheetModalRef?: any;

  constructor(props: BottomSheetProps) {
    super(props);
    this.bottomSheetModalRef = createRef<BottomSheetModal>();
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
        animationIn="fadeIn"
        animationInTiming={500}
        animationOutTiming={500}
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
          flex: 1,
          height:'100%',
          width:'100%',
          justifyContent: 'flex-end',
        }}>
        <PanGestureHandler mount={visible} />
      </Modal>
    );
  }
}
