import React from 'react';
import {View, Text} from 'react-native';
import BodyPost from './BodyPost';
import FooterPost from './FooterPost';
import HeaderPost from './HeaderPost';

interface Props {}

const Post = (props: Props) => {
  return (
    <View>
      <HeaderPost />
      <BodyPost />
      <FooterPost/>
    </View>
  );
};

export default Post;
