import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {ROUT_KEY} from 'constants/constanst';
import BottomNavigator from 'navigation/BottomNavigator';
import DrawerNavigator from 'navigation/DrawerNavigator';
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
      <Stack.Screen
        name={ROUT_KEY.DrawerNavigator}
        component={DrawerNavigator}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
