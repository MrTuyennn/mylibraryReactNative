import {IconMenu} from 'assets';
import {FS, ptColor} from 'constants/style';
import React, {useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export interface HeaderPostProps {
  onClickMenuOptions?: () => void;
}

const HeaderPost = (props: HeaderPostProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <LinearGradient
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          colors={ptColor.lineGradientInstagram}
          style={{
            padding: 2,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1522794172501-bddb216175fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
            }}
            style={{
              height: 35,
              width: 35,
              borderRadius: 50,
              borderColor: ptColor.white,
            }}
          />
        </LinearGradient>
        <Text
          style={{
            textAlign: 'center',
            fontSize: FS(10),
            margin: 5,
            marginHorizontal: 10,
            fontWeight: 'bold',
          }}>
          _jone_senna
        </Text>
      </View>
      <TouchableOpacity
        onPress={props.onClickMenuOptions}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <IconMenu />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderPost;
