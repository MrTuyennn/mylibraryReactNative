import React from 'react';
import {View, Text} from 'react-native';
import BodyPost from './BodyPost';
import FooterPost, {FooterPostProps} from './FooterPost';
import HeaderPost, {HeaderPostProps} from './HeaderPost';

interface Props extends FooterPostProps, HeaderPostProps {}

const Post = (props: Props) => {
  return (
    <View>
      <HeaderPost {...props} />
      <BodyPost />
      <FooterPost {...props} />
    </View>
  );
};

export default Post;
