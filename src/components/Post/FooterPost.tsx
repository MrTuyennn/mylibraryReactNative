import {IconCmt, IconHeart, IconShare} from 'assets';
import IconSave from 'assets/icons/IconSave';
import {FS, ptColor} from 'constants/style';
import React from 'react';
import {View, Text} from 'react-native';

interface Props {}

const FooterPost = (props: Props) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              marginHorizontal: 10,
            }}>
            <IconHeart color={ptColor.bgRed} />
          </View>
          <View
            style={{
              marginHorizontal: 10,
            }}>
            <IconCmt />
          </View>
          <View
            style={{
              marginHorizontal: 10,
            }}>
            <IconShare />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 10,
          }}>
          <IconSave />
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 10,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
          }}>
          12.235 lượt thích
        </Text>
        <Text
          style={{
            fontSize: FS(10),
            fontWeight: 'bold',
          }}>
          _jone_senna{' '}
          <Text
            style={{
              fontWeight: 'normal',
            }}>
            Món ăn việt
          </Text>
        </Text>
        <Text
          style={{
            color: ptColor.textPlaceholderColor,
          }}>
          Xem tất cả bình luận
        </Text>
      </View>
    </View>
  );
};

export default FooterPost;
