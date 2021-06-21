import PButton from 'components/Button/PButton';
import {
  FS,
  HEIGHT_SCALE_RATIO,
  ptColor,
  WIDTH_SCALE_RATIO,
} from 'constants/style';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native-elements/dist/image/Image';

interface Props {}

const RenderAccount = ({item,index}: any) => {
  return (
    <View
      key={index}
      style={[
        styles.container,
        {
          justifyContent: 'space-between',
          marginBottom: 10 * HEIGHT_SCALE_RATIO,
        },
      ]}>
      <View style={[styles.container]}>
        <View style={styles.containerImg}>
          <Image source={{uri: item.avatar}} style={styles.styleImg} />
        </View>
        <View style={styles.containerText}>
          <Text>{item.surname}</Text>
          <Text style={{color: ptColor.textPlaceholderColor}}>{item.name}</Text>
        </View>
      </View>
      <PButton
        containerStyle={{
          alignItems: 'flex-start',
        }}
        buttonStyle={styles.buttonStyle}
        title="Gửi"
        titleStyle={styles.titleStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  containerImg: {
    height: 40 * HEIGHT_SCALE_RATIO,
    width: 40 * WIDTH_SCALE_RATIO,
    borderRadius: 40,
  },
  styleImg: {
    height: '100%',
    width: '100%',
    borderRadius: 40,
    resizeMode: 'cover',
  },
  containerText: {
    marginLeft: 10 * HEIGHT_SCALE_RATIO,
  },
  titleStyle: {
    fontSize: FS(8),
    marginHorizontal: 30 * WIDTH_SCALE_RATIO,
  },
  buttonStyle: {
    height: 30 * HEIGHT_SCALE_RATIO,
  },
});

export default RenderAccount;
