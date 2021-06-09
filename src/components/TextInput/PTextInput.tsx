import {ptColor, WIDTH_SCALE_RATIO} from 'constants/style';
import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Text} from 'react-native-svg';

interface Props {
  refs?: any;
}

const PTextInput = (props: Props) => {
  const [input1, setinput1] = useState(String);
  const [input2, setinput2] = useState('');
  const [input3, setinput3] = useState('');
  const [input4, setinput4] = useState('');
  const [input5, setinput5] = useState('');
  const [input6, setinput6] = useState('');
  const [input7, setinput7] = useState('');
  const [input8, setinput8] = useState('');
  const [clickKey, setclickKey] = useState(Number);
  const [clickKey2, setclickKey2] = useState(Number);
  const inputEl1 = useRef<TextInput>(null);
  const inputEl2 = useRef<TextInput>(null);
  const inputEl3 = useRef<TextInput>(null);
  const inputEl4 = useRef<TextInput>(null);
  const inputEl5 = useRef<TextInput>(null);
  const inputEl6 = useRef<TextInput>(null);
  const inputEl7 = useRef<TextInput>(null);
  const inputEl8 = useRef<TextInput>(null);

  console.log('clickKey', clickKey);

  useEffect(() => {
    inputEl1.current?.focus();
    if (input1 !== '') {
      inputEl2.current?.focus();
    }
    if (input2 !== '') {
      inputEl3.current?.focus();
    }
    if (input3 !== '') {
      inputEl4.current?.focus();
    }
    if (input4 !== '') {
      inputEl5.current?.focus();
    }
    if (input5 !== '') {
      inputEl6.current?.focus();
    }
    if (input6 !== '') {
      inputEl7.current?.focus();
    }
    if (input7 !== '') {
      inputEl8.current?.focus();
    }
    if (input8 !== '') {
      console.log(
        'DD/MM/YYYY',
        input1 +
          input2 +
          '/' +
          input3 +
          input4 +
          '/' +
          input5 +
          input6 +
          input7 +
          input8,
      );
    }
    if (clickKey === 2) {
      inputEl7.current?.focus();
      setinput7('');
      setclickKey(0);
    }
    if (clickKey2 === 1) {
      inputEl6.current?.focus();
      setinput6('');
      setclickKey2(0);
    }
  }, [
    input1,
    input2,
    input3,
    input4,
    input5,
    input6,
    input7,
    input8,
    clickKey,
    clickKey2
  ]);
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      {/* DD */}
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: 20,
          }}>
          <TextInput
            style={{
              width: 20 * WIDTH_SCALE_RATIO,
            }}
            underlineColorAndroid="transparent"
            ref={inputEl1}
            value={input1}
            onChangeText={text => {
              setinput1(text);
            }}
            keyboardType="numeric"
            maxLength={1}
            placeholder="d"></TextInput>
          <View style={styles.position} />
        </View>
        <View>
          <TextInput
            ref={inputEl2}
            value={input2}
            onChangeText={text => {
              setinput2(text);
            }}
            style={{
              width: 20 * WIDTH_SCALE_RATIO,
            }}
            underlineColorAndroid="transparent"
            keyboardType="numeric"
            maxLength={1}
            placeholder="d"></TextInput>
          <View style={styles.position} />
        </View>
      </View>
      {/* DD */}

      {/* mm */}

      <View>
        <TextInput
          ref={inputEl3}
          value={input3}
          onChangeText={text => {
            setinput3(text);
          }}
          style={{
            width: 25 * WIDTH_SCALE_RATIO,
          }}
          underlineColorAndroid="transparent"
          keyboardType="numeric"
          maxLength={1}
          placeholder="m"></TextInput>
        <View style={styles.position} />
      </View>
      <View>
        <TextInput
          ref={inputEl4}
          value={input4}
          onChangeText={text => {
            setinput4(text);
          }}
          style={{
            width: 25 * WIDTH_SCALE_RATIO,
          }}
          underlineColorAndroid="transparent"
          keyboardType="numeric"
          maxLength={1}
          placeholder="m"></TextInput>
        <View style={styles.position} />
      </View>
      {/* mm */}

      {/* YYYY */}
      <View>
        <TextInput
          ref={inputEl5}
          value={input5}
          onChangeText={text => {
            setinput5(text);
          }}
          style={{
            width: 20 * WIDTH_SCALE_RATIO,
          }}
          underlineColorAndroid="transparent"
          keyboardType="numeric"
          maxLength={1}
          placeholder="y"></TextInput>
        <View style={styles.position} />
      </View>
      <View>
        <TextInput
          ref={inputEl6}
          value={input6}
          onChangeText={text => {
            setinput6(text);
          }}
          style={{
            width: 20 * WIDTH_SCALE_RATIO,
          }}
          underlineColorAndroid="transparent"
          keyboardType="numeric"
          maxLength={1}
          placeholder="y"></TextInput>
        <View style={styles.position} />
      </View>
      <View>
        <TextInput
          ref={inputEl7}
          value={input7}
          onChangeText={text => {
            setinput7(text);
          }}
          onKeyPress={({nativeEvent}) => {
            nativeEvent.key === 'Backspace'
              ? setclickKey(clickKey2 + 1)
              : console.log(']');
          }}
          style={{
            width: 20 * WIDTH_SCALE_RATIO,
          }}
          underlineColorAndroid="transparent"
          keyboardType="numeric"
          maxLength={1}
          placeholder="y"></TextInput>
        <View style={styles.position} />
      </View>
      <View>
        <TextInput
          ref={inputEl8}
          value={input8}
          onChangeText={text => {
            setinput8(text);
          }}
          onKeyPress={({nativeEvent}) => {
            nativeEvent.key === 'Backspace'
              ? setclickKey(clickKey + 1)
              : console.log(']');
          }}
          style={{
            width: 20 * WIDTH_SCALE_RATIO,
          }}
          underlineColorAndroid="transparent"
          keyboardType="numeric"
          maxLength={1}
          placeholder="y"></TextInput>
        <View style={styles.position} />
      </View>
      {/* YYYYY */}
    </View>
  );
};

export default PTextInput;

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    height: 1,
    width: '100%',
    backgroundColor: ptColor.textPlaceholderColor,
    bottom: 16,
  },
});
