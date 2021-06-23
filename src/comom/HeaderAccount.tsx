import {IMAGEPATH} from 'constants/imageConstanst';
import {HEIGHT_SCALE_RATIO, ptColor, WIDTH_SCALE_RATIO} from 'constants/style';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
interface Props {}

const HeaderAccount = (props: Props) => {
  const itemRender = (parameter: Number, title: String) => {
    return (
      <View style={styles.containerItem}>
        <Text style={styles.parameter}>{parameter}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        colors={ptColor.lineGradientInstagram}
        style={styles.styleLinear}>
        <Image source={IMAGEPATH.imageProfile} style={styles.styleImage} />
      </LinearGradient>
      <View style={styles.containerRender}>
        {itemRender(0, 'Bài viết')}
        {itemRender(236, 'Người theo dõi')}
        {itemRender(125, 'Đang theo dõi')}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10 * HEIGHT_SCALE_RATIO,
    flexDirection: 'row',
  },
  styleImage: {
    height: 70 * HEIGHT_SCALE_RATIO,
    width: 70 * HEIGHT_SCALE_RATIO,
    borderRadius: 50,
    borderColor: ptColor.white,
  },
  styleLinear: {
    padding: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerRender: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  containerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8 * WIDTH_SCALE_RATIO,
  },
  parameter: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    textAlign: 'center',
  },
});
export default HeaderAccount;
