import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {ROUT_KEY} from 'constants/constanst';
import React from 'react';
import HomeScreen from 'screens/HomeScreen';
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
      <Stack.Screen name={ROUT_KEY.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
