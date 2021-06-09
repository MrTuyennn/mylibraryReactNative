import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigator from './AppNavigator';
import MySpinner from 'components/MySpinner/MySpinner';
import MyAlert from 'components/Modal/MyAlert';

interface Props {}

const App = (props: Props) => {
  return (
    <NavigationContainer>
       <MyAlert />
      <MySpinner />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
