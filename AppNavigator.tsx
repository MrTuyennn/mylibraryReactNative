import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack';
import { ROUT_KEY } from 'constants/constanst';
import BottomNavigator from 'navigation/BottomNavigator';
import React from 'react';
interface Props {}

const Stack = createStackNavigator();

const AppNavigator = (props: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name={ROUT_KEY.BottomNavigator}
        component={BottomNavigator}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
