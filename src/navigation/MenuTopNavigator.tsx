import {ptColor} from 'constants/style';
import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Image} from 'react-native-elements';
import {DATA} from 'utils/store';
interface Props {}

const {height, width} = Dimensions.get('window');

const CELL_WIDTH = width * 0.64;
const CELL_HEIGHT = CELL_WIDTH * 1.4;
const SPACING = 10;
const MenuTopNavigator = (props: Props) => {
  const item = DATA[0];
  const ref = React.useRef(null);
  const selectedItemIndex = DATA.findIndex(i => i.id === item.id);
  const [selected, setselected] = useState(Number);
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* header Menu */}

      <View style={styles.listHeader}>
        {DATA.map((item: any, index: number) => {
          return (
            <TouchableOpacity
              onPress={() => setselected(index)}
              style={[
                styles.containerImg,
                {
                  backgroundColor:
                    selected === index ? ptColor.black : ptColor.gray05,
                },
              ]}
              key={index}>
              <Image source={{uri: item.imageUrl}} style={styles.styleImg} />
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Screen in header Menu */}

      <FlatList
        ref={ref}
        data={DATA}
        keyExtractor={({_, index}: any) => index}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={selectedItemIndex}
        nestedScrollEnabled
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        onMomentumScrollEnd={ev => {
          setselected(Math.floor(ev.nativeEvent.contentOffset.x / width));
        }}
        renderItem={({item, index}) => {
          return (
            <ScrollView style={styles.containerScroll}>
              <View style={{padding: SPACING}}>
                <Text style={{fontSize: 16}}>
                  {Array(50).fill(`${item.title} inner text \n`)}
                </Text>
              </View>
            </ScrollView>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listHeader: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginVertical: 20,
  },
  containerImg: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    padding: 10,
    margin: 10,
    backgroundColor: ptColor.gray05,
  },
  styleImg: {
    height: 20,
    width: 20,
    resizeMode: 'cover',
  },
  containerScroll: {
    width: width - SPACING * 2,
    margin: SPACING,
    backgroundColor: ptColor.gray05,
    borderRadius: 16,
  },
});

export default MenuTopNavigator;
