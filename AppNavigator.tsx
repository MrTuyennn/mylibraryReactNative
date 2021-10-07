import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import HeaderAnimatedTwitch from 'comom/custom/HeaderAnimatedTwitch';
import CircularProgress from 'components/CircularProgress/CircularProgress';
import ViewContanst from 'components/CircularProgress/ViewContanst';
import FBStoriesList from 'components/FBStoriesList/FBStoriesList';
import {ROUT_KEY} from 'constants/constanst';
import ScreenDemo from 'screens/ScreenDemo';
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
      <Stack.Screen name={ROUT_KEY.ScreenDemo} component={ScreenDemo} />

      {/* <Stack.Screen
        name={ROUT_KEY.DrawerNavigator}
        component={DrawerNavigator}
      /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
