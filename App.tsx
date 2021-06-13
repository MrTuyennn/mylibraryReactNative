import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigator from './AppNavigator';
import MySpinner from 'components/MySpinner/MySpinner';
import MyAlert from 'components/Modal/MyAlert';
import ModalShare from 'components/ModalShare/ModalShare';

interface Props {}

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <MyAlert />
      <MySpinner />
      <ModalShare />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
