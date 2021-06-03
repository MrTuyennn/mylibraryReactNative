import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigator from './AppNavigator';
import MySpinner from 'components/MySpinner/MySpinner';

interface Props {}

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <MySpinner />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
