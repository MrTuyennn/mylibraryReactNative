import PButton from 'components/Button/PButton';
import {HEIGHT_SCALE_RATIO, ptColor, WIDTH} from 'constants/style';
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {isRegexEmail, isRegexNumberPhoneVi} from 'utils/ultis';

interface Props {}

const ScreenRegex = (props: Props) => {
  const [numberPhone, setNumberPhone] = React.useState<any>('');
  const [email, setEmail] = React.useState<any>('');
  const [err, setError] = React.useState<any>('');

  const regexNumberPhone = () => {
    const errorMessage = isRegexNumberPhoneVi(numberPhone);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }
    console.log('Số điện thoại đúng định dạng', numberPhone);
  };

  const regexEmail = () => {
    const errEmail = isRegexEmail(email);
    console.log('email', errEmail);
  };
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Nhập số điện thoại"
          keyboardType="numeric"
          onChangeText={text => setNumberPhone(text)}
        />
        <TextInput
          placeholder="Nhập Email của bạn"
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
        />
      </View>
      <Text style={styles.textWithShadow}>{numberPhone}</Text>
      <View style={styles.ViewRow}>
        <PButton
          onPress={() => regexNumberPhone()}
          activeOpacity={0.5}
          containerStyle={styles.containerStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          title="Regex number Phone"
        />
        <PButton
          onPress={() => regexEmail()}
          containerStyle={styles.containerStyle}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
          title="Regex EMail"
        />
      </View>
    </View>
  );
};

export default ScreenRegex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
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
    marginVertical: 10 * HEIGHT_SCALE_RATIO,
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
