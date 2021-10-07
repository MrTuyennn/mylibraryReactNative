import * as React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';

export interface ScreenDemoProps {}

class ScreenDemo extends React.Component<ScreenDemoProps, any> {
  flatListRef: any;
  constructor(props: any) {
    super(props);
    this.flatListRef = null;
  }

  componentDidMount() {
    setTimeout(() => this.flatListRef.scrollToIndex({index: 8}), 3000);
  }

  renderItem({item}: any) {
    return (
      <View style={styles.listItem}>
        <Text>{item.data}</Text>
      </View>
    );
  }

  getItemLayout(data: any, index: number) {
    return {
      length: styles.listItem.height,
      offset: styles.listItem.height * index,
      index,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ref={ref => (this.flatListRef = ref)}
          data={DATA}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={item => item.id}
          getItemLayout={this.getItemLayout.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  listItem: {
    flex: 1,
    height: 40,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    paddingLeft: 10,
  },
});

const DATA = [...Array(50).keys()].map(key => ({
  id: key.toString(),
  data: 'Item ' + key.toString(),
}));

export default ScreenDemo;
