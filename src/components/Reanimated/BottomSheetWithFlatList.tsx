import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
// import {FlatList} from 'react-native-gesture-handler';
import {Fragment} from 'react';

const data = Array(50)
  .fill(0)
  .map((item, index) => ({
    id: `item-${index}`,
  }));

const FlatListScreen = () => {
  // state
  const [isInnerScrollEnabled, setIsInnerScrollEnabled] = useState(false);

  // ref
  const bottomSheetRef = useRef<BottomSheet | null>(null);
  const scrollRef = useRef<FlatList | null>(null);

  const onOpenEnd = () => {
    if (scrollRef.current !== null) {
      setIsInnerScrollEnabled(true);
      scrollRef.current.forceUpdate();
    }
  };

  const onCloseEnd = () => {
    if (scrollRef.current !== null) {
      setIsInnerScrollEnabled(false);
      scrollRef.current.forceUpdate();
    }
  };

  // renderes
  const renderHeader = () => {
    return (
      <View style={styles.bottomSheetHeaderContainer}>
        <Text>Header</Text>
      </View>
    );
  };

  const renderContent = () => {
    return (
      <Fragment>
        <FlatList
          ref={scrollRef}
          style={styles.bottomSheetContentContainer}
          pointerEvents={isInnerScrollEnabled === true ? 'auto' : 'none'}
          scrollEnabled={isInnerScrollEnabled}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </Fragment>
    );
  };

  const renderItem = ({item}: any) => {
    return (
      <View>
        <Text>{item.id}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        initialSnap={1}
        snapPoints={[600, 300]}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onOpenEnd={onOpenEnd}
        onCloseEnd={onCloseEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  bottomSheetHeaderContainer: {
    flex: 1,
    height: 50,
    backgroundColor: '#555',
  },

  bottomSheetContentContainer: {
    backgroundColor: '#333',
    height: 600,
  },
});

export default FlatListScreen;
