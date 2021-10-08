import PButton from 'components/Button/PButton';
import {HEIGHT_SCALE_RATIO, ptColor, WIDTH} from 'constants/style';
import React from 'react';
import {RootState} from '../redux/configureStore.dev';
import {StyleSheet, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from './../redux/hook/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementSaga,
  selectCount,
  incrementIfOdd,
} from './../redux/duck/Count/counterSlice';
interface Props {}

const ScreenRedux = (props: Props) => {
  const count = useAppSelector(state => state?.counter?.value);
  const title = useAppSelector(state => state?.counter?.title);
  const [incrementAmount, setIncrementAmount] = React.useState('2');
  console.log('INVALID', selectCount);
  const incrementValue = Number(incrementAmount) || 0;

  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.textWithShadow}>Số cộng:{count}</Text>
      <Text style={styles.textWithShadow}>{title}</Text>
      <View style={styles.ViewRow}>
        <PButton
          onPress={() => dispatch(decrement())}
          activeOpacity={0.5}
          containerStyle={styles.containerStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          title="Trừ"
        />
        <PButton
          onPress={() => dispatch(increment())}
          containerStyle={styles.containerStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          title="Cộng"
        />
        <PButton
          onPress={() => dispatch(incrementSaga('Có saGa nha'))}
          containerStyle={styles.containerStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          title="Saga"
        />

        <PButton
          // onPress={() => dispatch(incrementIfOdd(incrementValue))}
          activeOpacity={0.5}
          containerStyle={styles.containerStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          title="Làm gì đi"
        />
      </View>
    </View>
  );
};

export default ScreenRedux;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  ViewRow: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  containerStyle: {
    borderRadius: 20 * HEIGHT_SCALE_RATIO,
    height: WIDTH / 10,
    // backgroundColor: ptColor.bgRed,
    justifyContent: 'center',
    marginHorizontal: 10 * HEIGHT_SCALE_RATIO,
  },
  buttonStyle: {
    height: '100%',
    width: WIDTH / 2.5,
    backgroundColor: ptColor.white,
    borderWidth: 1,
    borderColor: ptColor.appColor,
    borderRadius: 20 * HEIGHT_SCALE_RATIO,
    shadowOffset: {width: 10, height: 10},
    shadowColor: ptColor.appColor2,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 15,
  },
  titleStyle: {
    color: ptColor.appColor,
  },
  textWithShadow: {
    color: ptColor.white,
    textShadowColor: ptColor.appColor,
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 10,
    fontSize: 18,
    fontWeight: '800',
    width: WIDTH / 2,
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 40 * HEIGHT_SCALE_RATIO,
  },
});
