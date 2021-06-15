import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Button} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {SafeAreaProvider} from 'react-native-safe-area-context';

interface Props {}

const BottomSheetModal = (props: Props) => {
  // state
  const [mount, setMount] = useState(false);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);

  // callbacks
  const handlePresentModal = useCallback(() => {
    setMount(state => !state);
  }, []);

  // effects
  useEffect(() => {
    if (mount === true) {
      bottomSheetRef.current?.expand();
    }
  }, [mount]);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === 0) {
      setMount(false);
    }
  }, []);
  // render
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Button
          title="Present"
          //   style={{
          //     marginHorizontal: 24,
          //     marginBottom: 6,
          //   }}
          onPress={handlePresentModal}
        />
        {mount && (
          <BottomSheet
            ref={bottomSheetRef}
            index={1}
            onChange={handleSheetChanges}
            snapPoints={snapPoints}>
            <View style={styles.content}>
              <Text>Content</Text>
            </View>
          </BottomSheet>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginHorizontal: 24,
    marginBottom: 6,
  },
});
export default BottomSheetModal;
