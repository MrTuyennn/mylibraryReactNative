import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import FBStoriesList from 'components/FBStoriesList/FBStoriesList';
import {ROUT_KEY} from 'constants/constanst';
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
      <Stack.Screen name={ROUT_KEY.FBStoriesList} component={FBStoriesList} />
      {/* <Stack.Screen
        name={ROUT_KEY.DrawerNavigator}
        component={DrawerNavigator}
      /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
