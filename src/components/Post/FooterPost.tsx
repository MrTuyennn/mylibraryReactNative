import {
  IconCmt,
  IconHeart,
  IconHeartWhite,
  IconSave,
  IconSaveBlack,
  IconShare,
} from 'assets';
import PTouchableOpacity from 'components/Button/PTouchableOpacity';
import {FS, ptColor} from 'constants/style';
import React, {useState, useRef} from 'react';
import {Text, View} from 'react-native';
import BottomSheet from 'components/BottomSheet/BottomSheet';
interface Props {
  ref?: any;
}

const FooterPost = (props: Props) => {
  const [like, setlike] = useState(false);
  const [share, setshare] = useState(false);
  const isBottomSheet = useRef<any>(null);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <PTouchableOpacity
            onPress={() => setlike(!like)}
            style={{
              marginHorizontal: 10,
            }}>
            {like ? <IconHeart /> : <IconHeartWhite />}
          </PTouchableOpacity>
          <View
            style={{
              marginHorizontal: 10,
            }}>
            <IconCmt />
          </View>
          <PTouchableOpacity
            onPress={() => {
              isBottomSheet.current?.show();
            }}
            style={{
              marginHorizontal: 10,
            }}>
            <IconShare />
          </PTouchableOpacity>
        </View>
        <PTouchableOpacity
          onPress={() => setshare(!share)}
          style={{
            marginHorizontal: 10,
          }}>
          {share ? <IconSaveBlack /> : <IconSave />}
        </PTouchableOpacity>
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

      {/* Modal Share */}
      <BottomSheet ref={isBottomSheet} />
    </View>
  );
};

export default FooterPost;
