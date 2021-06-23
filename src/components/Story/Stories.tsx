import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {userList} from 'components/Story/userList';
import LinearGradient from 'react-native-linear-gradient';
import {FS, ptColor} from 'constants/style';
// import {Image} from 'react-native';
import {IconAdd} from 'assets';

interface Props {}

const Stories = (props: Props) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{}}>
      <View style={{padding: 7}}>
        <Image
          style={{
            height: 70,
            width: 70,
            borderRadius: 50,
            borderColor: ptColor.white,
          }}
          source={{
            uri: 'https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
          }}
        />
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={{
            textAlign: 'center',
            fontSize: FS(10),
            textTransform: 'lowercase',
            marginTop: 7,
          }}>
          Tin của bạn
        </Text>
        <View style={{position: 'absolute', top: 55, right: 20}}>
          <IconAdd color={ptColor.appColor} />
        </View>
      </View>
      {userList.map((item, index) => {
        return (
          <View key={index} style={{padding: 5}}>
            <LinearGradient
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              colors={ptColor.lineGradientInstagram}
              style={{
                padding: 3,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: item.avatar}}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 50,
                  borderColor: ptColor.white,
                }}
              />
            </LinearGradient>
            <Text
              style={{
                textAlign: 'center',
                fontSize: FS(10),
                textTransform: 'lowercase',
                marginTop: 5,
              }}>
              {item.name}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
