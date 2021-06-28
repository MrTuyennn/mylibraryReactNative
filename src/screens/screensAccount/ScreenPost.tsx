import PFlatList from 'components/Flatlist/PFlatList';
import {userList} from 'components/Story/userList';
import {HEIGHT_SCALE_RATIO, WIDTH_SCALE_RATIO} from 'constants/style';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Image} from 'react-native-elements/dist/image/Image';

interface Props {}

const ScreenPost = (props: Props) => {
  const [refesh, setrefesh] = useState(false);
  const [loading, setloading] = useState(false);
  const renderItem = ({item}: any) => {
    return (
      <View style={styles.containerImage}>
        <Image style={styles.styleImage} source={{uri: item.avatar}} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <PFlatList
        // isLoading={loading}
        // refreshing={refesh}
        // onRefresh={() => {
        //     setloading(true);
        //   //   setrefesh(true);
        
        //   setTimeout(() => {
        //     // setrefesh(false);
        //     setloading(false);
        //   }, 2000);
        //   console.log('?');
        // }}
        // onRefresh={() => {}}
        renderFooter
        numColumns={3}
        data={userList || []}
        renderItem={renderItem}></PFlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  containerImage: {
    height: 150 * HEIGHT_SCALE_RATIO,
    width: 130 * WIDTH_SCALE_RATIO,
    flex: 1,
    margin: 2,
  },
  styleImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});

export default ScreenPost;
