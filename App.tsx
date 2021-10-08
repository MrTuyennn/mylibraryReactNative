import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigator from './AppNavigator';
import MySpinner from 'components/MySpinner/MySpinner';
import MyAlert from 'components/Modal/MyAlert';
import ModalShare from 'components/ModalShare/ModalShare';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import BottomSheet from 'components/BottomSheet/BottomSheet';
import {Host} from 'react-native-portalize';
import {ThemeProvider} from 'context/ThemeProvider';
import configureStore from './src/redux/configureStore.dev';
import {PersistGate} from 'redux-persist/integration/react';
// import {store} from './src/redux/configureStore.dev';
interface Props {}
const {store, persistor} = configureStore();
import {Provider} from 'react-redux';
const App = (props: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <ThemeProvider>
          <Host>
            <BottomSheetModalProvider>
              <BottomSheet />
              <MyAlert />
              <MySpinner />
              <ModalShare />
              <AppNavigator />
            </BottomSheetModalProvider>
          </Host>
        </ThemeProvider>
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
