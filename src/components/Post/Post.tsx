import React from 'react';
import {View, Text} from 'react-native';
import BodyPost from './BodyPost';
import HeaderPost from './HeaderPost';

interface Props {}

const Post = (props: Props) => {
  return (
    <View>
      <HeaderPost />
      <BodyPost />
    </View>
  );
};

export default Post;
