import {FS, HEIGHT_SCALE_RATIO, ptColor} from 'constants/style';
import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {listStory} from './listStoryAc';
import {IconPlush} from 'assets/svgs';

interface Props {}

const StoryAccount = (props: Props) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {listStory.map((story,index) => {
        return (
          <View key={index} style={styles.container}>
            <View style={styles.containerImg}>
              <Image style={styles.styleImg} source={story.imgStory} />
            </View>
            <Text style={styles.titleStory}>{story.title}</Text>
          </View>
        );
      })}
      <View style={styles.container}>
        <View
          style={[
            styles.containerImg,
            {justifyContent: 'center', alignItems: 'center'},
          ]}>
          {/* <Image style={styles.styleImg} source={story.imgStory} /> */}
          <IconPlush />
        </View>
        <Text style={styles.titleStory}>Mới</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10 * HEIGHT_SCALE_RATIO,
  },
  containerImg: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: ptColor.textPlaceholderColor,
    padding: 2,
  },
  styleImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: ptColor.textPlaceholderColor,
  },
  titleStory: {
    textAlign: 'center',
    fontSize: FS(9),
  },
});

export default StoryAccount;
