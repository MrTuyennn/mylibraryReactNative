import {IMAGEPATH} from 'constants/imageConstanst';
import {
  FS,
  HEIGHT_SCALE_RATIO,
  ptColor,
  style,
  WIDTH_SCALE_RATIO,
} from 'constants/style';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Icon, Input} from 'react-native-elements';
import {Image} from 'react-native-elements/dist/image/Image';
import {IconAddFriend} from 'assets';
interface Props {}

const HeaderModalShare = (props: Props) => {
  return (
    <View>
      <View style={styles.contentContainer}>
        <View style={styles.containImg}>
          <Image source={IMAGEPATH.imageMan} style={styles.styleImg} />
        </View>
        <Input
          inputContainerStyle={{borderBottomWidth: 0}}
          placeholder="Viết tin nhắn ..."
          inputStyle={{
            fontSize: 15,
          }}
          containerStyle={{
            height: 40 * HEIGHT_SCALE_RATIO,
          }}
        />
      </View>
      <View style={styles.divider} />
      <View
        style={{
          width: '100%',
        }}>
        <Input
          placeholder="Tìm kiếm"
          inputContainerStyle={styles.inputContainerStyleSr}
          containerStyle={styles.containerStyleSr}
          inputStyle={styles.inputStyleSr}
          leftIcon={
            <Icon
              type="feather"
              name="search"
              size={24}
              color={ptColor.textPlaceholderColor}
            />
          }
          rightIcon={<IconAddFriend />}
        />
      </View>
      <View
        style={[
          styles.contentContainer,
          {
            marginVertical: 20 * HEIGHT_SCALE_RATIO,
            alignItems: 'center',
          },
        ]}>
        <View style={styles.containImg}>
          <Image source={IMAGEPATH.imageProfile} style={styles.styleImg} />
        </View>
        <View>
          <Text style={styles.text}>Thêm bài viết vào tin của bạn</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    margin: 10 * HEIGHT_SCALE_RATIO,
  },
  containImg: {
    height: 40 * HEIGHT_SCALE_RATIO,
    width: 40 * WIDTH_SCALE_RATIO,
    borderRadius: 10,
  },
  styleImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: ptColor.gray6,
  },
  containerStyleSr: {
    height: 30 * HEIGHT_SCALE_RATIO,
  },
  inputContainerStyleSr: {
    height: 30 * HEIGHT_SCALE_RATIO,
    borderRadius: 10,
    marginVertical: 10 * HEIGHT_SCALE_RATIO,
    borderBottomWidth: 0,
    backgroundColor: ptColor.gray6,
    justifyContent: 'center',
    // padding: 6,
  },
  inputStyleSr: {
    justifyContent: 'center',
    fontSize: FS(11),
    padding: 6 * HEIGHT_SCALE_RATIO,
  },
  text: {
    color: ptColor.appColor,
    marginLeft: 10 * HEIGHT_SCALE_RATIO,
  },
});
export default HeaderModalShare;
