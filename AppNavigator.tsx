import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {ROUT_KEY} from 'constants/constanst';
import React from 'react';
import ScreenRegex from 'screens/ScreenRegex';
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
      <Stack.Screen name={ROUT_KEY.ScreenRegex} component={ScreenRegex} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
