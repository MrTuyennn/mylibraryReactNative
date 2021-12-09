import {HEIGHT, HEIGHT_SCALE_RATIO, ptColor, WIDTH} from 'constants/style';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {months} from 'utils/ultis';
import ScrollPicker from './ScrollPicker';

interface Props {}

const ScreenPicker = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.MiddleScroll}>
        <ScrollPicker
          //   ref={}
          dataSource={months}
          selectedIndex={0}
          itemHeight={50}
          wrapperHeight={250}
          wrapperColor={'#ffffff'}
          highlightColor={'#d8d8d8'}
          
          renderItem={(data: any, index: number, isSelected: any) => {
            return (
              <View>
                <Text
                  style={{
                    color: isSelected
                      ? ptColor.black
                      : ptColor.textPlaceholderColor,
                  }}>
                  {data}
                </Text>
              </View>
            );
          }}
          onValueChange={(data: any, selectedIndex: number) => {
            console.log('data: ', data);
          }}
        />
      </View>
    </View>
  );
};

export default ScreenPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MiddleScroll: {
    height: HEIGHT / 3,
    width: WIDTH / 1.2,
    borderRadius: 10 * HEIGHT_SCALE_RATIO,
    shadowColor: ptColor.blue,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.025,
    shadowRadius: 5 * HEIGHT_SCALE_RATIO,
    elevation: 3,
  },
});
