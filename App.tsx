import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigator from './AppNavigator';
import MySpinner from 'components/MySpinner/MySpinner';
import MyAlert from 'components/Modal/MyAlert';
import ModalShare from 'components/ModalShare/ModalShare';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import BottomSheet from 'components/BottomSheet/BottomSheet';
import {Host} from 'react-native-portalize';
interface Props {}

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <Host>
        <BottomSheetModalProvider>
          <BottomSheet />
          <MyAlert />
          <MySpinner />
          <ModalShare />
          <AppNavigator />
        </BottomSheetModalProvider>
      </Host>
    </NavigationContainer>
  );
};

export default App;
