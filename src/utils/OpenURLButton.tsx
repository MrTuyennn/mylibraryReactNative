import {TouchableOpacity} from '@gorhom/bottom-sheet';
import React from 'react';
import {Linking, StyleSheet} from 'react-native';

const OpenURLButton = ({url, children}: any) => {
  const handlePress = React.useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      console.log('?');
    }
  }, [url]);
  return <TouchableOpacity onPress={handlePress}>{children}</TouchableOpacity>;
};

export default OpenURLButton;

const styles = StyleSheet.create({});
