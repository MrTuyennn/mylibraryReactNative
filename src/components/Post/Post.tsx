import React from 'react';
import {View, Text} from 'react-native';
import BodyPost from './BodyPost';
import FooterPost, {FooterPostProps} from './FooterPost';
import HeaderPost from './HeaderPost';

interface Props extends FooterPostProps {}

const Post = (props: Props) => {
  return (
    <View>
      <HeaderPost />
      <BodyPost />
      <FooterPost {...props} />
    </View>
  );
};

export default Post;
