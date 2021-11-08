import {IconMedpro} from 'assets/svgs';
import MySpinner from 'components/MySpinner/MySpinner';
import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
interface UiDemoProps {}
export const UiDemo: FC<UiDemoProps> = () => {
  React.useEffect(() => {
    MySpinner.show();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.rectangle}>
        <View style={styles.triangleCorner} />
      </View> */}

      
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  rectangle: {
    width: 100 * 2,
    height: 500,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'red',
  },
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 100,
    borderTopWidth: 100,
    borderTopLeftRadius: 10,
    borderRightColor: 'transparent',
    borderTopColor: 'red',
  },
});
